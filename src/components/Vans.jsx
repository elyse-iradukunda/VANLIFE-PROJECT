import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="text-[#161616]">
            <Link to={`/vans/${van.id}`}>
            <img 
                src={van.imageUrl} 
                className="w-70 h-70 rounded-[5px]"
            />

            <div className="mt-2 flex gap-10  justify-between">
                <h3 className="font-bold text-2xl">{van.name}</h3>
                <p className="font-bold">
                    ${van.price}
                    <span className="text-sm">/day</span>
                </p>
            </div>

            <i
                className={`
                    inline-block
                    mt-2
                    p-3
                    w-30
                    text-center
                    rounded-[5px]
                    text-[#FFEAD0]
                    font-medium
                    transition-all
                    duration-200
                    ${van.type === "simple" && "bg-[#E17654]"}
                    ${van.type === "rugged" && "bg-[#115E59]"}
                    ${van.type === "luxury" && "bg-[#161616]"}
                `}
            >
                {van.type}
            </i>
            </Link>
        </div>
    ))

    return (
        <div className="">
            <h1 className=" font-bold text-5xl" >Explore our van options</h1>
            <div className="grid grid-cols-2 justify-items-center gap-[34px] mt-[57px]">
                
                {vanElements}
            </div>
        </div>
    )
}