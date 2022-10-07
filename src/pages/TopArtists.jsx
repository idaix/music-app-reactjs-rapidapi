import { useEffect, useState } from "react";
import { ArtistCard, Loader } from "../components";
import { fetchFromShazamApi } from "../utils/fetchApi";
const TopArtists = () => {
  const [ topCharts, setTopCharts ] = useState([])
  useEffect(()=>{
    fetchFromShazamApi('charts/world').then(data=>setTopCharts(data))
  }, [])
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-left mt-4 mb-10">Top Charts</h2>

      
      {!topCharts.length&&(<div className="w-full flex"><Loader /></div>)}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {topCharts?.map((track) => <ArtistCard key={track.key} track={track} />)}
      </div>
    </div>
  )
}

export default TopArtists