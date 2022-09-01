import React from 'react'
import MovieList from '../common/movieList'
import { LatMovie } from '../../../constant'
function LatestMovie() {
  return (
    <div className="latMovie">
      <MovieList movieList={LatMovie}></MovieList>
    </div>
  )
}

export default LatestMovie
