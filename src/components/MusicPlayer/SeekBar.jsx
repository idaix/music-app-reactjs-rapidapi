const SeekBar = ({ duration, currentTime, setCurrentTime }) => {

  const handleProgress = (e) => {
    let count = (e.target.value * duration) / 100
    setCurrentTime(count)
    console.log('count', count);
  }
  return (
    <>
      <input
        onChange={handleProgress}
        value={duration ? (currentTime * 100) / duration : 0}
        type="range"
        name="progressBar"
        id="prgbar"
      />
    </>
  )

}

export default SeekBar