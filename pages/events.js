import Layout from '../components/layout'
import Card from '../components/card'
import Channel from '../models/Channel';
import Empty from '../components/empty';
import dbConnect from '../server/dbConnect';
import Head from 'next/head'

const Events = ({eventsList}) => {

    let currentPath = ''
    if (typeof window !== 'undefined') {
        currentPath = window.location.href;
    }

  return (
    <>
        <Head>
            <title>Bitfutbol - Eventos</title>
            <meta http-equiv="Content-Security-Policy" content="script-src 'self' *.telerium.club;"/>
            <meta property="og:title" content={ `Bitfutbol - Eventos` }  />
            <meta property="og:description" content={`Mira fulbol online y totalmente gratis en Bitfutbol`} />
            <meta property="og:image" content="/images/static/meta-image.jpg"/>
            <meta property="og:url" content={currentPath}/>
        </Head>
        <Layout>
            <header className="bg-dark py-5 mt-5" 
                style={{backgroundImage: `url('./images/static/banner-3.jpg')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom center'}}>
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder"
                        style={{textShadow: '1px 1px 5px #242424'}}>Eventos</h1>
                    </div>
                </div>
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                {
                    eventsList.length > 0 ? (
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {
                                eventsList.map((item, index) => (
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
    let eventsList = {};

    await dbConnect()

    let results = await Channel.find({type: "event"}).select('name type slug -_id')
    eventsList = JSON.parse(JSON.stringify(results))

    return {
        props: {
            eventsList
        }
    }
}

export default Events