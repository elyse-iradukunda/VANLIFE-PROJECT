import { useEffect, useState } from "react"
import { Link,useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams,setSearchParams]= useSearchParams();
    const [vans, setVans] = useState([])

    const typeFilter= searchParams.get("type")

 
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])



const displayedVans = typeFilter
   ? vans.filter(van => van.type === typeFilter)
   : vans

const vanElements = displayedVans.map(van => (
        <div key={van.id} className="text-[#161616]">
            <Link to={`/vans/${van.id}`}
              
              aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
            
            
            >
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
<div className="flex gap-4 mt-6">
    <Link 
        to="?type=simple"
        className="bg-[#E17654] text-white px-4 py-2 rounded-md font-medium"
    >
        Simple
    </Link>

    <Link 
        to="?type=luxury"
        className="bg-[#161616] text-white px-4 py-2 rounded-md font-medium"
    >
        Luxury
    </Link>

    <Link 
        to="?type=rugged"
        className="bg-[#115E59] text-white px-4 py-2 rounded-md font-medium"
    >
        Rugged
    </Link>

    <Link 
        to="."
        className="underline font-medium text-gray-700 ml-4"
    >
        Clear filter
    </Link>
</div>
            <div className="grid grid-cols-2 justify-items-center gap-[34px] mt-[57px]">
                
                {vanElements}
            </div>
        </div>
    )
}