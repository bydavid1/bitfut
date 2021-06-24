import Layout from '../../components/layout'
import Channel from '../../models/Channel'
import Head from 'next/head'
import { useRef } from 'react'

import { FacebookShareButton,
        FacebookIcon, 
        TwitterShareButton,
        TwitterIcon,
        WhatsappShareButton,
        WhatsappIcon,
        TelegramShareButton,
        TelegramIcon,} from 'next-share'

export default function Stream({currentChannel}) {

    let frameElement = useRef(null)
    let currentPath = ''
    if (typeof window !== 'undefined') {
        currentPath = window.location.href;
     }

    function blockScripts() {
        let m = document.createElement("meta");
        m.httpEquiv = "content-security-policy";
        m.content = "script-src 'self' 'unsafe-inline';";
    }

    return (
        <>
            <Head>
                <title>{currentChannel.name}</title>
                <meta http-equiv="Content-Security-Policy" content="script-src 'self' *.telerium.club;"/>
                <meta property="og:title" content={ `Bitfutbol - ${currentChannel.name}` }  />
                <meta property="og:description" content={`Mira ${currentChannel.name} online y totalmente gratis`} />
                <meta property="og:image" content="/images/static/meta-image.jpg"/>
                <meta property="og:url" content={currentPath}/>
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
                                allowFullScreen={true}
                                onLoad={blockScripts}/>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Compartir</li>
                                <li className="list-group-item">
                                <FacebookShareButton
                                    url={currentPath}
                                    hashtag={'#bitfutbol'}
                                    className="pe-2">
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={currentPath}
                                    hashtag={'#bitfutbol'}
                                    className="pe-2">
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                <WhatsappShareButton
                                    url={currentPath}
                                    className="pe-2">
                                    <WhatsappIcon size={32} round />
                                </WhatsappShareButton>
                                <TelegramShareButton
                                    url={currentPath}
                                    className="pe-2">
                                    <TelegramIcon size={32} round />
                                </TelegramShareButton>
                                </li>
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