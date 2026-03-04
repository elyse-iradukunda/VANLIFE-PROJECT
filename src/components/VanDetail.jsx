import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
    const [van, setVan] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch van data");
                return res.json();
            })
            .then(data => setVan(data.vans)) 
            .catch(err => console.error("Error fetching van:", err));
    }, [params.id]);

    return (
        <div className="p-7 mx-auto">
            {van ? (
                <div className="flex flex-col text-[#161616]">
                    <img 
                        src={van.imageUrl} 
                        className="rounded-md my-[47px]" 
                    />
                    <i className={`van-type ${van.type} font-bold bg-[#e17654] p-1  rounded-sm text-amber-50 selected self-start`}>
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
    );
}