
import Image from 'next/image'

export default function Empty(props) {
    return (
        <div className="d-flex flex-column justify-content-center">
            <h3 className="text-center">No hay resultados disponibles</h3>
            <Image className="my-5" src="/images/static/no-results.svg" alt="no-results" width="200" height="200" />
        </div>
    )
}