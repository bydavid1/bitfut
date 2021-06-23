import Layout from '../components/layout'
import Card from '../components/card'
import Channel from '../models/Channel';
import dbConnect from '../server/dbConnect';
require('dotenv').config()

const Index = ({channelList}) => {
  return (
    <Layout>
      <header className="bg-dark py-5 mt-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Futbol en vivo</h1>
                <p className="lead fw-normal text-white-50 mb-0">Sin anuncios <strong className="text-primary">invasivos</strong></p>
            </div>
        </div>
    </header>
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    channelList.length > 0 ? (
                        channelList.map((item, index) => (
                            <div className="col mb-5" key={index}>
                                <Card title={item.name} type={item.type}  slug={item.slug}/>
                            </div>
                        ))
                    ) : (
                        <h3>No data source</h3>
                    )
                }
            </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
    let channelList = {};

    await dbConnect()

    let results = await Channel.find({}).select('name type slug -_id')
    channelList = JSON.parse(JSON.stringify(results))
    console.log(channelList)
    return {
        props: {
            channelList
        }
    }
}

export default Index