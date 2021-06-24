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
                            <li className="nav-item">
                                <Link href="/channels"><a className="nav-link active">Canales</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/events"><a className="nav-link active">Eventos</a></Link>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#!">Acerca de</a></li>
                        </ul>
                    </div>
                    <div>
                    <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="bydavid" data-color="#FFDD00" data-emoji=""  data-font="Lato" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>
                    </div>
                </div>
            </nav>
            {children}
            <footer className="py-2 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright © bitfut.com 2021</p></div>
            </footer>
        </>
    )
  }