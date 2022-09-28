import { useEffect, useState } from 'react'
import { genres } from '../assets/constants'
import { Songs } from '../components'
import { fetchFromShazamApi } from '../utils/fetchApi'

const Discover = () => {
  const [selectedGenre, setselectedGenre] = useState('POP')
  const [genreSongsList, setGenreSongsList] = useState([])
  
  const genreTitle = genres.find(({ value }) => value === selectedGenre)?.title
  const handleGenreChange = (e) => {
    setselectedGenre(e.target.value)
  }


  // get data from shazam api *fetch result evrytime selected genre shanges
  useEffect(()=>{
    // scroll to top 
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setGenreSongsList([])
    fetchFromShazamApi(`genre-world?genre_code=${selectedGenre}`).then(data=>setGenreSongsList(data))
  
  }, [selectedGenre])
  return (
    <div className=''>
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-left">Discover {genreTitle}</h2>

        <select
          onChange={handleGenreChange}
          value={ selectedGenre || 'POP'}
          className="bg-white dark:bg-black dark:text-gray-400 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 cursor-pointer"
        >
          {genres.map(genre => <option key={genre.value} value={genre.value} className='cursor-pointer'>{genre.title}</option>)}
        </select>
      </div>

      {/* Display songs */}
      <Songs data={genreSongsList} />
    </div>
  )
}

export default Discover