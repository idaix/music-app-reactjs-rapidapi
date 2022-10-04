import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
const PlayPause = ({ isPlaying, togglePlaying }) => (isPlaying?(
    <button
        onClick={togglePlaying}
    >
        <FaPauseCircle
            size={35}
            className="text-gray-300"
        />
    </button>
):(
    
    <FaPlayCircle
        size={35}
        className="text-gray-300"
    />
))

export default PlayPause