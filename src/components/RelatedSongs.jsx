import React from 'react'
import Songs from './Songs'

const RelatedSongs = ({ songs }) => {
  return (
    <>
      <Songs data={songs} />
    </>
  )
}

export default RelatedSongs