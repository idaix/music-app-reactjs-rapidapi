import { Logo, SearchBar } from "./"

const Navbar = () => {
  return (
    <nav className='p-1 flex items-center gap-3'>
      <div className="md:hidden">
        <Logo />
      </div>
      <SearchBar />
    </nav>
  )
}

export default Navbar