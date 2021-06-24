import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Coffee from '../components/coffee'

const Index = () => {

    let currentPath = ''
    if (typeof window !== 'undefined') {
        currentPath = window.location.href;
    }

  return (
    <>
        <Head>
            <title>Bitfutbol</title>
            <meta http-equiv="Content-Security-Policy" content="script-src 'self' https://cdnjs.buymeacoffee.com/"/>
            <meta property="og:title" content={ `Bitfutbol - Acerca de` }  />
            <meta property="og:description" content={`Mira fulbol online y totalmente gratis en Bitfutbol`} />
            <meta property="og:image" content="/images/static/meta-image.jpg"/>
            <meta property="og:url" content={currentPath}/>
        </Head>
        <Layout>
            <section className="text-center mt-5 py-5">
                <div className="container">
                    <h1>Bitfutbol</h1>
                    <p className="lead text-muted">Un sitio hecho por Byron Jimenez, con el objetivo de practicar nuevas tecnologías y a la vez crear algo interesante que a la gente le pueda servir o entretener. </p>
                        <Link href="/">
                            <a className="btn btn-primary my-2">Ir al inicio</a>
                        </Link>
                        <Coffee/>
                </div>
            </section>
            <div className="py-5 bg-light">
                <div className="container">
                    <h2 class="text-center">Tecnologías usadas:</h2>
                    <div className="row mt-5">
                        <div className="col-md-3">
                            <div className="card mb-4 box-shadow">
                                <Image src="/images/static/nextjs.svg" width={200} height={200} className="card-img-top p-5" alt="logo"/>
                                <div className="card-body">
                                    <h5 className="card-title">Next.js</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mb-4 box-shadow">
                                <Image src="/images/static/mongodb.svg" width={200} height={200} className="card-img-top p-5" alt="logo"/>
                                <div className="card-body">
                                    <h5 className="card-title">MongoDB</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mb-4 box-shadow">
                                <Image src="/images/static/bootstrap.svg" width={200} height={200} className="card-img-top p-5" alt="logo"/>
                                <div className="card-body">
                                    <h5 className="card-title">Bootstrap</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mb-4 box-shadow">
                                <Image src="/images/static/vercel.svg" width={200} height={200} className="card-img-top p-5" alt="logo"/>
                                <div className="card-body">
                                    <h5 className="card-title">Vercel</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default Index