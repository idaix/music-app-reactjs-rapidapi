import React from 'react'
import Songs from './Songs'

const RelatedSongs = ({ songs }) => {
  return (
    <div>
      <Songs data={songs} />
    </div>
  )
}

export default RelatedSongs