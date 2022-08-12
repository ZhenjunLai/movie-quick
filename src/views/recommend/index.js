import React from 'react'
import Slider from '../../components/slider'
import { sliderList } from '../../constant'
import { RecommendWrap } from './style'

function Recommend() {
  return (
    <RecommendWrap>
      <Slider sliderList={sliderList} autoplay={true}></Slider>
    </RecommendWrap>
  )
}

export default React.memo(Recommend)
