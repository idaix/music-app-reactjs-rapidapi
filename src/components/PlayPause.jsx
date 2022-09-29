import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
const PlayPause = ({ isPlaying }) => (isPlaying?(
    <FaPauseCircle
        size={35}
        className="text-gray-300"
    />
):(
    <FaPlayCircle
        size={35}
        className="text-gray-300"
    />
))

export default PlayPause