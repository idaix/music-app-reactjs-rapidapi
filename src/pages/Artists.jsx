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
        const artistDetailData = await fetchFromShazamApi(`artists/details?artist_id=${id}`).then(data=>data)
        setartistDetail(artistDetailData)

      }
      fetchData()
      console.log(artistDetail);
    }, [id])
    
    // if (!artistDetail?.alias) return <div className='w-full flex'><Loader /></div>
    return (
      <div className="flex flex-col gap-5">
        <DetailHeader forArtist artist={artistDetail} artistId={id} />
        
        {/* <RelatedSongs songs={relatedSongs} /> */}
      </div>
    )
}

export default Artists