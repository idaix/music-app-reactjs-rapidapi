import React from 'react'
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs'
import { MdSkipNext, MdSkipPrevious  } from 'react-icons/md'

const Controls = ({ isPlaying, songsList, togglePlaying, prevSong, nextSong, toggleRepeat, toggleRandom }) => {
  return (
    <div className='flex items-center gap-2 sm:gap-5'>
      <button onClick={toggleRepeat}>
        <BsArrowRepeat size={20}/> 
      </button>
      {songsList?.length&& <button onClick={prevSong}><MdSkipPrevious size={30} /></button>}
      <button
        onClick={togglePlaying}
      >
        {isPlaying?(
          <BsFillPauseFill size={45} />
        ):(
          <BsFillPlayFill size={45} />
        )}
      </button>
      {songsList?.length&& <button onClick={nextSong}><MdSkipNext size={30} /></button>}
      <button onClick={toggleRandom}>
        <BsShuffle size={20} />
      </button>
    </div>
  )
}

export default Controls