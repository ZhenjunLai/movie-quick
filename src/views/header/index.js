import React from 'react'
import { navList } from '../../constant'
import { HeaderWraper, HeaderContent, Nav } from './style'
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
            <span>{item.name}</span>
          ))}
        </Nav>
      </HeaderContent>
    </HeaderWraper>
  )
}

export default Header
