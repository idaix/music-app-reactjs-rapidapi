import React from 'react'
import { Link } from 'react-router-dom'
import { BsSpotify } from 'react-icons/bs'
import { RiVipDiamondFill } from 'react-icons/ri'

const Logo = ({ isBottom }) => (
    <Link to='/' className={`flex items-center gap-1 text-primary ${isBottom&&'text-gray-500'}`}>
        <span className='text-lg'><RiVipDiamondFill /></span>
        <span className='font-bold '>Desire</span>
    </Link>
)

export default Logo