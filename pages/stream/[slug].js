import Layout from '../../components/layout'
import Channel from '../../models/Channel'
import Head from 'next/head'
import { useRef } from 'react'

export default function Stream({currentChannel}) {

    let frameElement = useRef(null)

    function blockScripts() {
        let m = document.createElement("meta");
        m.httpEquiv = "content-security-policy";
        m.content = "script-src 'self' 'unsafe-inline';";

        console.log(frameElement)
    }

    return (
        <>
            <Head>
                <title>{currentChannel.name}</title>
                <meta http-equiv="Content-Security-Policy" content="script-src 'self' *.telerium.club;"/>
            </Head>
            <Layout>
                <div className="container mt-5 py-5">
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <div className="card text-center">
                            <div className="card-header">
                                En vivo 
                            </div>
                            <div className="card-body">
                                <iframe ref={frameElement} src={currentChannel.source} 
                                sandbox="allow-same-origin allow-scripts" 
                                width="1024" 
                                height="450"
                                frameBorder="0" 
                                scrolling="no" 
                                allowFullScreen="true"
                                onLoad={blockScripts}/>
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