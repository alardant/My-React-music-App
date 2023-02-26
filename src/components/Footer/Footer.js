import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px;
`

const Footer = () => {
  return (
    <div>
      <Wrapper>The footer</Wrapper>
    </div>
  )
}

export default Footer
