import Layout from '../components/layout'

export default function Stream() {
    return (
        <Layout>
            <div className="container vh-100">
                <div className="d-flex align-items-center justify-content-center h-100">
                    <div class="card text-center">
                        <div class="card-header">
                            En vivo
                        </div>
                        <div class="card-body">
                            <iframe src="https://ian.radamel.icu/reproductor/directv.php" width="700" height="438" frameborder="0" scrolling="no" allowfullscreen="true"></iframe> 
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Compartir</li>
                            <li class="list-group-item">Facebook</li>
                            <li class="list-group-item">Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}