import React from 'react'

const Track = ({ currentSong, isActive }) => {
  return (
    <div className='flex-1 flex items-center justify-start '>
        <div className={`${isActive&&'animate-[spin_3s_linear_infinite]'} hidden sm:block h-16 w-16 mr-4`}>
            <img className='rounded-full' src={currentSong.images?.coverart} alt={currentSong?.title} />
        </div>
        <div className="w-[50%]">
            <p className="truncate font-bold text-lg">{currentSong?.title}</p>
            <p className='truncate text-gray-400'>{currentSong?.subtitle}</p>
        </div>
    </div>
  )
}

export default Track