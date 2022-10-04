import { useContext } from 'react'
import { Link } from 'react-router-dom'
import PlayerContext from '../context/playerContext'
import PlayPause from './PlayPause'

const SongCard = ({ song }) => {
    const { currentSong, setCurrent, togglePlaying } = useContext(PlayerContext)
    
    return (
        <div className='flex flex-col w-[250px] p-4 bg-black/5 dark:bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
            <div className="relative w-full h-56 group"
                onClick={() => setCurrent(song)}
            >
                <div className={`absolute inset-0 justify-center items-center bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 group-hover:flex ${currentSong?.key === song.key ? 'flex bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70' : 'hidden'}`}>
                    {currentSong?.key === song.key?(<PlayPause isPlaying={true} togglePlaying={togglePlaying} />):(<PlayPause />)}
                </div>
                <img src={song.images?.coverart} alt={song.title} className='w-full h-full rounded-lg ' />
            </div>
            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-lg truncate">
                <Link to={`/songs/${song?.key}`}>
                    {song?.title}
                </Link>
                </p>
                <p className="text-sm truncate text-gray-400 mt-1">
                <Link to={song?.artists ? `/artists/${song?.artists?.[0]?.adamid}` : '/top-artists'}>
                    {song?.subtitle}
                </Link>
                </p>
            </div>
        </div>
    )
}

export default SongCard