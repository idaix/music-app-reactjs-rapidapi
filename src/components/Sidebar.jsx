import { NavLink } from "react-router-dom"
import { links } from "../assets/constants"
import Logo from "./Logo"

const NavLinks = () => (
    <ul className="pt-3 flex flex-col gap-2 font-semibold">
        {links.map(link=>(
            <li key={link.name} className="hover:pl-2 duration-300 py-1">
                <NavLink to={link.to} className="flex items-center">
                    <span className="w-6 mr-1 text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                </NavLink>
            </li>
        ))}
    </ul>
)


const Sidebar = () => {
  return (
    <div className='hidden md:block fixed top-0 left-0 h-screen md:w-60 lg:w-64 xl:w-72 overflow-auto p-1'>
        <div className="h-full rounded-xl p-3 bg-slate-100">
            <div className="">
                <Logo />
            </div>
            <NavLinks />
        </div>
    </div>
  )
}

export default Sidebar