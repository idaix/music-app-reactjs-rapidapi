import React from 'react'
import loader from '../assets/loader.svg'
const Loader = () => (
    <span className='mx-auto'>
         <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    </span>
)

export default Loader