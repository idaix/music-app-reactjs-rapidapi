import { useState } from "react"
import { Logo, SearchBar } from "./"
import { TbMenu } from 'react-icons/tb'
import { links } from "../assets/constants"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false)
  
  return (
    <nav className='p-1 flex items-center gap-3'>
      <div className="md:hidden">
        <Logo />
      </div>
      <SearchBar />
      <button className="md:hidden text-xl" onClick={()=>setMenuIsOpen(prev=>!prev)}><TbMenu /></button>
      {menuIsOpen&&(
        <div className="fixed w-full h-full bg-white dark:bg-black top-0 left-0 p-4">
          <div className="relative">
            <button onClick={()=>setMenuIsOpen(prev=>!prev)} className='absolute right-0 top-0 italic text-sm'>EXIT</button>
            <Logo />
            <ul className="pt-3 flex flex-col gap-2">
                {links.map(link=>(
                    <li key={link.name} className="hover:text-primary duration-300 py-2 text-lg">
                        <NavLink to={link.to} className="flex items-center">
                            <span className="w-6 mr-3 text-xl">{link.icon}</span>
                            <span>{link.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  
  )
}

export default Navbar