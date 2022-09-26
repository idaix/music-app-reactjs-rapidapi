import React from 'react'
import { FiSearch } from 'react-icons/fi'
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
        
        <button type='submit' className=' px-3 py-1 rounded-full bg-primary text-white'>Search</button>
    </form>
  )
}

export default SearchBar