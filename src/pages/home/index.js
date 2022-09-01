import React from 'react'
import Header from '../../views/header'
import Recommend from '../../views/recommend'
import { HomeWrap } from './style'
import Content from '../../views/content'
function Home() {
  return (
    <HomeWrap>
      <div className="home">
        <Header />
        <Recommend />
        <Content />
      </div>
    </HomeWrap>
  )
}

export default Home
