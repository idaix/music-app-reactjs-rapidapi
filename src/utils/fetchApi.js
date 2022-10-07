// daichekkal

import axios from "axios";

const SHAZAM_BASE_URL = 'https://shazam-core.p.rapidapi.com/v1'

const shazamOptions = {
    url: SHAZAM_BASE_URL,
    // params: {genre_code: 'POP'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_SHAZAM_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
};


export const fetchFromShazamApi = async(url) => {
    try {
        const { data } =  await axios.get(`${SHAZAM_BASE_URL}/${url}`, shazamOptions)
        return data
    } catch (error) {
        return error
    }
    
}
