import { Link } from 'react-router-dom'

const SongCard = ({ song }) => {
  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
        <div className="relative w-full h-56 group">
            <img src={song.images?.coverart} alt={song.title} className='w-full h-full rounded-lg ' />
        </div>
        <div className="mt-4 flex flex-col">
            <p className="font-semibold text-lg truncate">
            <Link to={`/songs/${song?.key}`}>
                {song.title}
            </Link>
            </p>
            <p className="text-sm truncate text-gray-400 mt-1">
            <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
                {song.subtitle}
            </Link>
            </p>
        </div>
    </div>
  )
}

export default SongCard