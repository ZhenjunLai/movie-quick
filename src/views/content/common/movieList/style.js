import styled from 'styled-components'
export const HotMovieWrap = styled.div`
  margin: 10px 5px 0px 5px;

  .tip-wrap {
    display: flex;
    font-size: 14px;

    .title {
      flex: 8;
    }
    .tip {
      flex: 1.5;
      text-align: right;
    }
    .more {
      text-align: right;
      flex: 0.5;
    }
  }
`
export const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 185px;
    margin: 12px;
    position: relative;
    .name {
      font-size: 16px;
      font: 400;
      padding: 4px;
    }
    .actors {
      font-size: 12px;
      padding: 2px;
      font: 400;
    }
    .definition {
      position: absolute;
      font-size: 24px;
      color: rgba(255, 255, 255, 0.8);
      left: 50%;
      top: 75%;
      transform: translate(-50%, -75%);
    }
    .score {
      width: 40px;
      height: 20px;
      background: orange;
      font-size: 16px;
      text-align: center;
      line-height: 20px;
      position: absolute;
      left: -8px;
      top: 20px;
      border-radius: 2px;
    }

    .score::before {
      content: '';
      position: absolute;
      border-top: 8px solid orange;
      border-left: 8px solid transparent;
      border-right: 0px solid transparent;
      bottom: -7px;
      left: 0px;
    }
  }
  img {
    width: 100%;
    height: 255px;
    border: 1px solid #000;
  }
`
