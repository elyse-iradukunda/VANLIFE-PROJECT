import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const hostVansEls = vans.map(van => (
    <Link
      to={van.id}
      key={van.id}
      className="no-underline text-inherit"
    >
      <div className="flex items-center bg-white mb-[15px] py-[18px] pl-[24px]">
        <img
          src={van.imageUrl}
          alt={`Photo of ${van.name}`}
          className="h-[70px] rounded-[5px] mr-[17px]"
        />
        <div>
          <h3 className="text-[20px] font-semibold my-[10px]">
            {van.name}
          </h3>
          <p className="my-[10px]">
            ${van.price}/day
          </p>
        </div>
      </div>
    </Link>
  ))

  return (
    <section>
      <h1 className="px-[26px] text-2xl font-bold">
        Your listed vans
      </h1>

      <div className="px-[26px]">
        {vans.length > 0 ? (
          <section>

            
            {hostVansEls}
          </section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  )
}