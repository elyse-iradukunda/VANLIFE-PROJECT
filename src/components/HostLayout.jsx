import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold underline text-[#161616] py-[5px] px-5"
      : "no-underline text-[#4D4D4D] font-medium py-[5px] px-5 hover:text-[#161616] hover:underline hover:font-semibold"

  return (
    <>
      <nav className="flex gap-10">
        <NavLink end={true} to="/host" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/host/income" className={linkClass}>
          Income
        </NavLink>

        <NavLink to="/host/vans" className={linkClass}>
          Vans
        </NavLink>

        
        <NavLink to="/host/reviews" className={linkClass}>
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  )
}