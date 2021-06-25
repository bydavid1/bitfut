

export default function Empty() {
    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center">
                <h3 className="text-center">No hay resultados disponibles</h3>
                <img className="my-5 mx-auto img-fluid w-25" src="/images/static/no-results.svg" alt="no-results"/>
            </div>
        </div>
    )
}