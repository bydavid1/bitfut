import Layout from '../components/layout'
import Card from '../components/card'
import Channel from '../models/Channel';
import Empty from '../components/empty';
import dbConnect from '../server/dbConnect';
import Head from 'next/head'

const Channels = ({channelList}) => {
  return (
    <>
        <Head>
            <title>Bitfutbol</title>
            <meta http-equiv="Content-Security-Policy" content="script-src 'self' *.telerium.club;"/>
        </Head>
        <Layout>
            <header className="bg-dark py-5 mt-5" 
                style={{backgroundImage: `url('./images/static/banner-1.jpg')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom center'}}>
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder"
                        style={{textShadow: '1px 1px 5px #242424'}}>Canales</h1>
                    </div>
                </div>
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    {
                        channelList.length > 0 ? (
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                {
                                    channelList.map((item, index) => (
                                        <div className="col mb-5" key={index}>
                                            <Card title={item.name} type={item.type}  slug={item.slug}/>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <Empty/>
                        )
                    }
                </div>
            </section>
        </Layout>
    </>
  )
}

export async function getServerSideProps() {
    let channelList = {};

    await dbConnect()

    let results = await Channel.find({type: "channel"}).select('name type slug -_id')
    channelList = JSON.parse(JSON.stringify(results))

    return {
        props: {
            channelList
        }
    }
}

export default Channels