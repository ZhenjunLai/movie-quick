import styled from 'styled-components'
export const SliderContainer = styled.div`
  width: 1055px;
  height: 400px;
  position: relative;
  overflow: hidden;
  .swiper-wrap {
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;

    .swiper-item {
      width: 1080px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        /* object-fit: cover; */
      }
    }
  }
  .swiper-arrow {
    position: absolute;
    display: flex;
    bottom: 50%;
    width: 100%;
    justify-content: space-between;

    .iconfont {
      font-size: 48px;
      color: rgba(0, 0, 0, 0.3);
    }
  }

  .swiper-focus {
    position: absolute;
    display: flex;
    bottom: 40px;
    right: 60px;

    .active {
      background: orange !important;
    }
  }

  .swiper-focus span {
    width: 50px;
    height: 10px;
    background: white;
    margin-right: 20px;
    border-radius: 5px;
  }
`
