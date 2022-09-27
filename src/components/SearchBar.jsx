import { FiSearch } from 'react-icons/fi'
import { RiSearch2Line } from 'react-icons/ri'
const SearchBar = () => {
  return (
    <form 
        // onSubmit={handleSubmit}
        className="flex-1 flex items-center rounded p-1"
        >
        <FiSearch className='text-gray-400 ml-1' />
        <input 
            type="text" 
            placeholder='Search...' 
            // value={value}
            // onChange={(e)=>setValue(e.target.value)} 
            className='bg-transparent border-none outline-none w-full pl-3 pr-1 py-1 placeholder:text-sm placeholder:text-slate-400' 
        />
        
        <button type='submit' className='p-2 md:px-3 md:py-1 rounded-full bg-primary text-white'>
          <span className='hidden md:block'>Search</span>
          <span className="md:hidden"><RiSearch2Line /></span>
        </button>
    </form>
  )
}

export default SearchBar