import React from 'react'
import Header from '../../views/header'
import Recommend from '../../views/recommend'
import { HomeWrap } from './style'
function Home() {
  return (
    <HomeWrap>
      <div>
        <Header />
        <Recommend />
      </div>
    </HomeWrap>
  )
}

export default Home
