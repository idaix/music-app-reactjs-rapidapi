import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader, DetailHeader, RelatedSongs } from "../components"
import { fetchFromShazamApi } from "../utils/fetchApi"

const Artists = () => {
    const { id } = useParams()
    const [ artistDetail, setartistDetail ] = useState([])
    const [ relatedSongs, setRelatedSongs ] = useState([])

    useEffect(()=>{
      const fetchData = async () => {
        const artistDetailData = await fetchFromShazamApi(`artists/details?track_id=${id}`).then(data=>data)
        setartistDetail(artistDetailData)

      }
      fetchData()
      console.log(artistDetail);
    }, [id])
    
    // if (!artistDetail?.alias) return <div className='w-full flex'><Loader /></div>
    return (
      <div className="flex flex-col gap-5">
        <DetailHeader forArtist artist={artistDetail} artistId={id} />
        <div className="text-center md:text-start">
          <h2 className="text-3xl font-bold mb-3">Lyrics:</h2>
          {
            artistDetail?.sections?.[1].type === "LYRICS"
            ? artistDetail?.sections?.[1]?.text.map((line, i)=>(
              <p key={i} className="text-gray-400 text-base my-1">{line}</p>
            )):(
              <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
            )
          }
        </div>
        {/* <RelatedSongs songs={relatedSongs} /> */}
      </div>
    )
}

export default Artists