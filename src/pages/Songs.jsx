import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader, DetailHeader, RelatedSongs } from "../components"
import { fetchFromShazamApi } from "../utils/fetchApi"

const Songs = () => {
    const { id } = useParams()
    const [ songDetail, setSongDetail ] = useState([])
    const [ relatedSongs, setRelatedSongs ] = useState([])

    useEffect(()=>{
      const fetchData = async () => {
        const songDetailData = await fetchFromShazamApi(`tracks/details?track_id=${id}`).then(data=>data)
        setSongDetail(songDetailData)

        const relatedSongsData = await fetchFromShazamApi(`tracks/related?track_id=${id}`).then(data=>data)
        setRelatedSongs(relatedSongsData)
      }
      fetchData()
      console.log(songDetail);
    }, [id])
    
    // if (!songDetail?.alias) return <div className='w-full flex'><Loader /></div>
    return (
      <div className="flex flex-col gap-5">
        <DetailHeader song={songDetail} />
        <div className="text-center md:text-start">
          <h2 className="text-3xl font-bold mb-3">Lyrics:</h2>
          {
            songDetail?.sections?.[1].type === "LYRICS"
            ? songDetail?.sections?.[1]?.text.map((line, i)=>(
              <p key={i} className="text-gray-400 text-base my-1">{line}</p>
            )):(
              <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
            )
          }
        </div>
        <RelatedSongs songs={relatedSongs} />
      </div>
    )
}

export default Songs