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
                <div className="container my-5 p-5">
                    <h2 className="mb-4">{currentChannel.name}</h2>
                    <div className="alert alert-warning d-flex align-items-center" role="alert">
                        <svg id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                        </svg>
                        <div className="ms-3">
                            Advertencia: <strong> Bitfutbol no coloca anuncios</strong> pero dependiendo del proveedor pueden aparecer, si tienes inconvenientes con eso por favor reportalo y cambiaremos de servidor. 
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            En vivo 
                        </div>
                        <div className="card-body">
                            <iframe ref={frameElement} src={currentChannel.source} 
                                width="100%"
                                height="450"
                                sandbox="allow-same-origin allow-scripts" 
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