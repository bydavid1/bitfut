import Layout from '../../components/layout'
import Channel from '../../models/Channel'
import Head from 'next/head'

export default function Stream({currentChannel}) {

    return (
        <>
            <Head>
                <title>{currentChannel.name}</title>
                <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';"/>
            </Head>
            <Layout>
                <div className="container vh-100 py-5">
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <div className="card text-center">
                            <div className="card-header">
                                En vivo 
                            </div>
                            <div className="card-body">
                                <iframe src={currentChannel.source} width="700" height="438" frameBorder="0" scrolling="no" allowFullScreen="true"></iframe> 
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Compartir</li>
                                <li className="list-group-item">Facebook</li>
                                <li className="list-group-item">Twitter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query
    let currentChannel = {}

    let results = await Channel.findOne({slug: slug}).select('source name')
    currentChannel = JSON.parse(JSON.stringify(results))

    return {
        props: {
            currentChannel
        }
    }
}