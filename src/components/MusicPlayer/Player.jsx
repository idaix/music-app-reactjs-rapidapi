import { useEffect, useRef } from "react"


const Player = ({ currentSong, playing, handleEnd, currentTime, setCurrentTime, duration, setDuration, stateVolume }) => {
  const audio = useRef(null)

  if (audio.current) {
    if (playing) {
      audio.current.play()
    }else{
      audio.current.pause()
    }
  }
  useEffect(()=>{
    audio.current.volume = stateVolume;
  }, [stateVolume])

  const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause()
  return (
    <audio
      src={currentSong?.hub?.actions?.[1]?.uri}
      ref={audio}
      preload="true"
      onTimeUpdate={(e)=>setCurrentTime(e.target.currentTime)}
      onCanPlay={(e)=>setDuration(e.target.duration)}
      onEnded={handleEnd}
    />
  )
}

export default Player