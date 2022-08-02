import React from 'react'
import { navList } from '../../constant'
import { HeaderWraper, HeaderContent, Nav, NavInput, HisLogin } from './style'
function Header() {
  return (
    <HeaderWraper>
      <HeaderContent>
        <img
          src="https://www.ffddyy.com/templets/ff/images/logo.png"
          alt="fangfang movie"
        ></img>
        <Nav>
          {navList.map((item) => (
            <div className="nav-item">
              <span>{item.name}</span>
              {item.isShowIcon ? <i className="iconfont icon-arrow"></i> : ''}
            </div>
          ))}
          <NavInput>
            <span>视频</span>
            <i className="iconfont icon-arrow"></i>
            <input type="text" placeholder="请输入关键字"></input>
            <i className="iconfont icon-fangdajing"></i>
          </NavInput>
          <HisLogin>
            <span>看过</span>
            <i className="iconfont icon-arrow"></i>
            <span className="login">登陆</span>
          </HisLogin>
        </Nav>
      </HeaderContent>
    </HeaderWraper>
  )
}

export default Header
