import React, { useState, useEffect } from 'react'
import { SliderContainer } from './style'

function Slider(props) {
  const { sliderList, autoplay } = props
  let [step, setStep] = useState(0)
  let [swiperBoxStyle, setSwiperBoxStyle] = useState({
    width: `${sliderList.length * 1080}px`,
    left: `${-step * 1080}px`,
    transition: `all ${50}ms linear`,
  })
  const handleClickArrow = (direction) => {
    setStep((step) => {
      if ((direction = 'left')) {
        step--
        if (step < 0) {
          setStep(sliderList.length - 1)
        }
      } else if (direction === 'right') {
        step++
        if (step > sliderList.length - 1) {
          setStep(0)
        }
      }
      return step
    })
    setSwiperBoxStyle({ ...swiperBoxStyle, left: `${-step * 1080}px` })
  }
  useEffect(() => {
    let swiperTimer = null
    if (autoplay) {
      swiperTimer = setInterval(() => {
        setStep((step) => {
          step++
          if (step > 2) {
            setStep(0)
          }
          return step
        })

        console.log('step2 = ', step)
        setSwiperBoxStyle({ ...swiperBoxStyle, left: `${-step * 1080}px` })
      }, 2000)
    }
    return () => {
      clearInterval(swiperTimer)
    }
  }, [step, autoplay, swiperBoxStyle])

  return (
    <SliderContainer>
      <div className="swiper-wrap" style={swiperBoxStyle}>
        {sliderList.map((item, index) => {
          return (
            <div className="swiper-item" key={index}>
              <img src={item.backupImg} alt="recommend" />
            </div>
          )
        })}
      </div>
      <div className="swiper-arrow">
        <div
          className="iconfont icon-xiangzuojiantou"
          onClick={() => handleClickArrow('left')}
        ></div>
        <div
          className="iconfont icon-xiangyoujiantou"
          onClick={() => handleClickArrow('right')}
        ></div>
      </div>

      <div className="swiper-focus">
        {sliderList.map((item, index) => {
          return (
            <span key={index} className={index === step ? 'active' : ''}></span>
          )
        })}
      </div>
    </SliderContainer>
  )
}
export default React.memo(Slider)
