import { useParams, NavLink,Link, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [id])

    if (!currentVan) {
        return <h1 className="p-6">Loading...</h1>
    }

    const badgeColor = 
        currentVan.type === "simple" ? "bg-[#E17654]" : 
        currentVan.type === "rugged" ? "bg-[#115E59]" : "bg-[#161616]"

    return (
        <section className="bg-[#FFF7ED] min-h-screen p-6">
            <Link
                to=".."
                relative="path"
                className="inline-block mb-9 text-[#161616] hover:underline"
            >
                &larr; <span className="border-b border-black">Back to all vans</span>
            </Link>

            <div className="bg-white rounded-md p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img 
                    src={currentVan.imageUrl} 
                    alt={currentVan.name}
                    className="rounded-md w-40 h-40 object-cover" 
                />

                <div className="flex flex-col">
                    <i className={`inline-block px-4 py-1 rounded-md text-sm font-semibold self-start capitalize text-[#FFEAD0] ${badgeColor}`}>
                        {currentVan.type}
                    </i>

                    <h2 className="text-3xl font-bold text-[#161616] mt-3">
                        {currentVan.name}
                    </h2>

                    <p className="text-xl font-bold mt-1">
                        ${currentVan.price}<span className="font-medium text-base">/day</span>
                    </p>
                </div>

                
            </div>


          <Outlet context={{currentVan}}/>   
             
             <nav className="flex gap-6 my-7">
    <NavLink
        to="."
        end
        className={({ isActive }) => 
            isActive ? "font-bold underline decoration-2 underline-offset-4 text-[#161616]" : "text-[#4D4D4D] hover:text-[#161616]"
        }
    >
        Details
    </NavLink>
    
    <NavLink
        to="pricing"
        className={({ isActive }) => 
            isActive ? "font-bold underline decoration-2 underline-offset-4 text-[#161616]" : "text-[#4D4D4D] hover:text-[#161616]"
        }
    >
        Pricing
    </NavLink>
    
    <NavLink
        to="photos"
        className={({ isActive }) => 
            isActive ? "font-bold underline decoration-2 underline-offset-4 text-[#161616]" : "text-[#4D4D4D] hover:text-[#161616]"
        }
    >
        Photos
    </NavLink>
</nav>
           
        </section>
    )
}