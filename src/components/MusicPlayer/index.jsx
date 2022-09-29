import { useContext } from "react"
import Controls from "./Controls"
import SeekBar from "./SeekBar"
import Track from "./Track"
import VolumeBar from "./VolumeBar"
import PlayerContext from "../../context/playerContext"
const MucisPlayer = () => {
  const { currentSong, playing, togglePlaying } = useContext(PlayerContext)
  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
        <Track currentSong={currentSong} isActive={playing}/>
        <div className="flex-1 flex flex-col items-center justify-center">
            <Controls 
              songsList={[1,2,3]}
              isPlaying={playing}
              togglePlaying={togglePlaying}
            />
            <SeekBar />
        </div>
        <VolumeBar />
    </div>
  )
}

export default MucisPlayer