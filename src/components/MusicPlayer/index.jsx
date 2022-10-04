import { useContext, useState } from "react"
import Controls from "./Controls"
import SeekBar from "./SeekBar"
import Track from "./Track"
import VolumeBar from "./VolumeBar"
import PlayerContext from "../../context/playerContext"
import Player from "./Player"
const MucisPlayer = () => {
  const { 
    togglePlaying,
    playing,
    songsList,
    currentSong,
    prevSong,
    nextSong,
    toggleRepeat,
    toggleRandom,
    handleEnd,
  } = useContext(PlayerContext)


  const [stateVolume, setStateVolume] = useState(0.3)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  
  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
        <Track currentSong={currentSong} isActive={playing}/>
        <div className="flex-1 flex flex-col items-center justify-center">
            <Controls 
              songsList={songsList}
              isPlaying={playing}
              togglePlaying={togglePlaying}
              prevSong={prevSong}
              nextSong={nextSong}
              toggleRepeat={toggleRepeat}
              toggleRandom={toggleRandom}
            />
            <SeekBar duration={duration} currentTime={currentTime} setCurrentTime={setCurrentTime} />
            <Player 
              currentSong={currentSong}
              playing={playing}
              handleEnd={handleEnd}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              duration={duration}
              setDuration={setDuration}
              stateVolume={stateVolume}
            />
        </div>
        <VolumeBar stateVolume={stateVolume} setStateVolume={setStateVolume} />
    </div>
  )
}

export default MucisPlayer