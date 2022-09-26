import React from 'react'
import { Link } from 'react-router-dom'
import { BsSpotify } from 'react-icons/bs'

const Logo = () => (
    <Link to='/' className='flex items-center gap-1 text-primary'>
        <span><BsSpotify /></span>
        <span className='font-semibold'>Spotify</span>
    </Link>
)

export default Logo