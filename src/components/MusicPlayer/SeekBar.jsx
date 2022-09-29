import { useRef } from 'react'
const SeekBar = () => {
  const audio = useRef('audio_tag')
  return (
    <div>
      <audio
        ref={audio}
        type='audio/mpeg'
        preload='true' 
      ></audio>
    </div>
  )
}

export default SeekBar