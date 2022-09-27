import { SongCard, Loader } from './'

const Songs = ({ data }) => {
    if (!data.length) return <div className='w-full flex'><Loader /></div>
    return (
        <div  className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.map((song, i)=>(
                <SongCard key={song.key} song={song} />
            ))}
        </div>
    )
}

export default Songs