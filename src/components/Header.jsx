import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-6 py-8 md:px-10">
      <NavLink className="font-black text-2xl tracking-tighter" to="/">
        #VANLIFE
      </NavLink>

      <div className="flex gap-6 font-semibold text-[#4D4D4D]">
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "hover:text-[#161616] transition-colors"
          }
        >
          Host
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "hover:text-[#161616] transition-colors"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/vans"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "hover:text-[#161616] transition-colors"
          }
        >
          Vans
        </NavLink>
      </div>
    </nav>
  )
}