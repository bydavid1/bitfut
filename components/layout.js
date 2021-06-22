import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container px-4 px-lg-5">
                    <Link href="/"><a className="navbar-brand">Bitfut</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link active">Inicio</a></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Contenido</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">Canales</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#!">Eventos</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#!">Acerca de</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {children}
            <footer className="py-2 bg-dark fixed-bottom">
                <div className="container"><p className="m-0 text-center text-white">Copyright © bitfut.com 2021</p></div>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous"></script> 
        </>
    )
  }