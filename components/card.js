import Link from 'next/link'

export default function Card(props) {
    return (
        <div className="card h-100">
            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>
                { props.type }</div>
            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{ props.title }</h5>
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <Link href={`/stream/${props.slug}`}>
                        <a className="btn btn-outline-dark mt-auto">Ver ahora</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}