import Layout from '../components/layout'
import Channel from '../components/channel'

export default function Home() {
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
                <div className="col mb-5">
                    <Channel title="Barcelona vs Real Madrid" type="Evento" source="https://ian.radamel.icu/reproductor/directv.php?width=700&amp;height=438"/>
                </div>
                <div className="col mb-5">
                    <Channel title="Direct tv" type="Canal" source="https://ian.radamel.icu/reproductor/directv.php?width=700&amp;height=438"/>
                </div>
                <div className="col mb-5">
                    <Channel title="Bein Sports" type="Canal" source="https://ian.radamel.icu/reproductor/directv.php?width=700&amp;height=438"/>
                </div>
                <div className="col mb-5">
                    <Channel title="Bein Sports" type="Canal" source="https://ian.radamel.icu/reproductor/directv.php?width=700&amp;height=438"/>
                </div>
                <div className="col mb-5">
                    <Channel title="Bein Sports" type="Canal" source="https://ian.radamel.icu/reproductor/directv.php?width=700&amp;height=438"/>
                </div>
                <div className="col mb-5">
                    <Channel title="Bein Sports" type="Canal" source="https://ian.radamel.icu/reproductor/directv.php?width=700&amp;height=438"/>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}
