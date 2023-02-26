import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const Wrapper = styled.header`
border-bottom: solid 1px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0px 24px;
  align-items: center;
  & a{
    text-decoration: none;
    color : inherit;
    margin-right: 16px;
  }
  & a:first-child{
    margin-right: 16px;
  }
  & nav{
    display: flex;
  }
  & h1{
    margin-left: 16px;
    font-size: 18px;
  }
`

const MenuEl = styled.p`
  font-size: 18px;
  padding-bottom: 2px;
  border-bottom: solid 2px ${props => props.isCurrentPage ? "" : "transparent"};
  &:hover{
    border-bottom: solid 2px;
  }`

const Header = ({ handleToggleTheme, isLight }) => {

  const location = useLocation();

  return (
    <div>
      <Wrapper>
        <h1>Our super music app</h1>
        <nav>
          <Link to='/'>
            <MenuEl isCurrentPage={location.pathname === '/'}>
              Home
            </MenuEl>
          </Link>
          <Link to='/about'>
            <MenuEl isCurrentPage={location.pathname === '/about'}>
              About
            </MenuEl>
          </Link>
        </nav>
      </Wrapper>

    </div>
  )
}


export default Header
