import React from 'react'
import { Link } from 'react-router-dom'

const DetailHeader = ({ song, forArtist, artist, artistId }) => {
    console.log(artist);
  return (
    <div className='p-3 rounded flex flex-col md:flex-row gap-5 bg-gradient-to-t from-white/10 to-primary/40 backdrop-blur-lg text-center md:text-start'>
        <img 
            src={
                forArtist?artist?.artists?.[artistId]?.attributes?.artwork?.url:song?.images?.coverart
            } 
            alt={song?.key} 
            className="mx-auto md:mx-0 sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-primary/20" 
        />
        <div>
            <p className="font-bold sm:text-3xl text-xl">
                {forArtist ? artist?.artists?.[artistId]?.attributes?.name : song?.title}
            </p>
            {!forArtist&&(
                <Link to={`/artists/${song?.artists?.[0]?.adamid}`}>
                    <p className="text-base text-gray-400 mt-2">{song?.subtitle}</p>
                </Link>
            )}
            <p className="text-base text-gray-400 mt-2">
                {!forArtist&&song?.genres?.primary}
            </p>
        </div>
    </div>
  )
}

export default DetailHeader