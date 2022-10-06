import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader, Songs } from '../components'
import { fetchFromShazamApi } from '../utils/fetchApi'

const AroundYou = () => {
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)
  const [aroundYouResults, setAroundYouResults] = useState([])
  useEffect(()=>{
    axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_API_KEY}`)
      .then(res=>setCountry(res?.data.location.country))
      .catch(error => console.log(error))
      .finally(setLoading(false))
  }, [country])

  useEffect(()=>{
    fetchFromShazamApi(`charts/country?country_code=${country}`).then(data=>setAroundYouResults(data))
  }, [country])
  if(loading) return <div className='w-full flex'><Loader /></div>
  // if(!aroundYouResults.length) return <div className='w-full flex'><Loader /></div>
  console.log(aroundYouResults);
  return (
    <div>
      <Songs data={aroundYouResults} />
    </div>
  )
}

export default AroundYou