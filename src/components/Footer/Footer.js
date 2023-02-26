import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.theme.mainColor};
`

const Footer = ({handleToggleTheme, isLight}) => {
  return (
    <Wrapper>
        <button onClick={handleToggleTheme}>Switch to {isLight ? 'light' : 'dark'} theme</button>
    </Wrapper>
  )
}

export default Footer
