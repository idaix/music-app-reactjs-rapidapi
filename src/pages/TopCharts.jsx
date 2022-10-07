import { useEffect, useState } from "react";
import { fetchFromShazamApi } from "../utils/fetchApi";
import { Songs } from "../components";
const TopCharts = () => {
  const [ topCharts, setTopCharts ] = useState([])
  useEffect(()=>{
    fetchFromShazamApi('charts/world').then(data=>setTopCharts(data))
  }, [])
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-left mt-4 mb-10">Top Charts</h2>

      <Songs data={topCharts} />
    </div>
  )
}

export default TopCharts