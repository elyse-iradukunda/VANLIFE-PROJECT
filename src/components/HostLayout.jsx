import { Link, Outlet } from "react-router-dom"

export default function HostLayout() {
  return (

   <> 
    <nav className="flex gap-10">
      <Link className="no-underline text-[#4D4D4D] font-medium py-[5px] px-5 hover:text-[#161616] hover:underline hover:font-semibold" to="/host">
        Dashboard
      </Link>

      <Link className="no-underline text-[#4D4D4D] font-medium py-[5px] px-5 hover:text-[#161616] hover:underline hover:font-semibold" to="/host/income">
        Income
      </Link>

      <Link className="no-underline text-[#4D4D4D] font-medium py-[5px] px-5 hover:text-[#161616] hover:underline hover:font-semibold" to="/host/reviews">
        Reviews
      </Link>
    </nav>

    <Outlet/>

 </>
  )
}