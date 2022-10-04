const VolumeBar = ({ stateVolume, setStateVolume }) => {
  return (
    <div className='flex-1 justify-end hidden md:flex'>
      <input
        type="range"
        step="any"
        value={Math.round(stateVolume * 100)}
        min={0}
        max={100}
        onChange={(e) => setStateVolume(e.target.value / 100)}
        className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2 cursor-pointer"
      />
    </div>
  )
}

export default VolumeBar