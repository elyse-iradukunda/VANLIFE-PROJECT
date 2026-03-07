import { useEffect, useState } from "react"
import { useParams, Link, useLocation } from "react-router-dom"

export default function VanDetail() {
    const [van, setVan] = useState(null)
    const params = useParams()
    const location = useLocation()

    const search = location.state?.search || ""

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch van data")
                return res.json()
            })
            .then(data => setVan(data.vans))
            .catch(err => console.error(err))
    }, [params.id])

    return (
        <div className="p-7 mx-auto">
            <Link
                to={`..${search}`}
                relative="path"
                className="inline-block mb-9 text-[#161616] hover:underline"
            >
                ← Back to all vans
            </Link>

            {van ? (
                <div className="flex flex-col text-[#161616]">
                    <img src={van.imageUrl} className="rounded-md my-[47px]" />

                    <i className="font-bold bg-[#e17654] p-1 rounded-sm text-amber-50 self-start">
                        {van.type}
                    </i>

                    <h2 className="text-2xl mb-2.5">{van.name}</h2>

                    <p className="text-lg mb-2.5">
                        <span className="font-bold text-xl">${van.price}</span>/day
                    </p>

                    <p>{van.description}</p>

                    <button className="bg-[#FF8C38] text-white text-lg mt-2.5 px-4 py-2 rounded">
                        Rent this van
                    </button>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    )
}