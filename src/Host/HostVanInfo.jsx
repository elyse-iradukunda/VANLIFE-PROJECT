import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { currentVan } = useOutletContext()
    
    return (
        <section className="flex flex-col gap-4 text-sm leading-6">
            <h4 className="font-bold text-[#161616]">
                Name: <span className="font-medium">{currentVan.name}</span>
            </h4>
            <h4 className="font-bold text-[#161616]">
                Category: <span className="font-medium capitalize">{currentVan.type}</span>
            </h4>
            <h4 className="font-bold text-[#161616]">
                Description: <span className="font-medium">{currentVan.description}</span>
            </h4>
            <h4 className="font-bold text-[#161616]">
                Visibility: <span className="font-medium">Public</span>
            </h4>
        </section>
    )
}