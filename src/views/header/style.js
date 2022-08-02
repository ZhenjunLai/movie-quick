import styled from 'styled-components'
export const HeaderWraper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`
export const HeaderContent = styled.div`
  width: 1055px;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 120px;
    height: 40px;
  }
`
export const Nav = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  .nav-item {
    margin-left: 20px;

    .iconfont {
      font-size: 12px;
    }
  }
`

export const NavInput = styled.div`
  width: 200px;
  height: 28px;
  margin-left: 24px;
  background: #f5f5f5;
  border: 1px solid #eee;
  border-radius: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  span,
  i {
    margin-left: 4px !important;
  }
  input {
    width: 120px;
    margin-left: 4px !important;
    border: none;
    background: #f5f5f5;
  }
  .iconfont {
    font-size: 12px !important;
  }
`

export const HisLogin = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;

  .login {
    margin-left: 12px;
  }

  .iconfont {
    font-size: 12px !important;
  }
`
