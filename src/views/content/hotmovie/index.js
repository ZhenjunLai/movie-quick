import React from 'react'
import { hotMovie } from '../../../constant'
import MovieList from '../common/movieList'

function LatestMovie() {
  return (
    <div className="hotMovie">
      <MovieList movieList={hotMovie}></MovieList>
    </div>
  )
}

export default LatestMovie
