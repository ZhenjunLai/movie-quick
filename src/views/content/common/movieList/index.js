import React from 'react'
import { HotMovieWrap, ItemWrap } from './style'
function MovieList(props) {
  console.log('MovieList = ', props)
  const { title, total, update, content } = props.movieList
  return (
    <HotMovieWrap>
      <div className="tip-wrap">
        <div className="title">{title}</div>
        <div className="tip">{`今日更新${update}部共${total}部`}</div>
        <div className="more">更多</div>
      </div>
      <ItemWrap>
        {content.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.imgUrl} alt="movie" />
            <div className="name">{item.name}</div>
            <div className="actors">{item.actors}</div>
            <div className="definition">{item.definition}</div>
            <div className="score">{item.score}</div>
          </div>
        ))}
      </ItemWrap>
    </HotMovieWrap>
  )
}

export default MovieList
