import { useEffect, useState } from "react"

export default function Vans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="text-[#161616]">
            <img 
                src={van.imageUrl} 
                className="w-full rounded-[5px]"
            />

            <div className="mt-2">
                <h3 className="font-semibold">{van.name}</h3>
                <p className="font-medium">
                    ${van.price}
                    <span className="text-sm">/day</span>
                </p>
            </div>

            <i
                className={`
                    inline-block
                    mt-2
                    px-[14px]
                    py-[7px]
                    h-[34px]
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
        </div>
    ))

    return (
        <div className="px-[23px]">
            <div className="grid grid-cols-2 justify-items-center gap-[34px] mt-[57px]">
                {vanElements}
            </div>
        </div>
    )
}