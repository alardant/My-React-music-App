import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: #058695;
  background: radial-gradient(
    circle, 
    #058695 0%, 
    #102f69 100%
    );
    position: relative;
    overflow: hidden;
  &::before{
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background: radial-gradient(
    circle, 
    #df97b6 ${(props) => props.isPlayed ? '25%' : '0%'} 
    #740b38 100%
    );
    opacity: ${(props) => props.isPlayed ? '1' : '0'};
    transition: linear 0.2s;
  }
  &:hover::before{
    opacity: 1;
  }
  &:active::before{
    opacity: 1;
    background: radial-gradient(
    circle, 
    #df97b6 25%, 
    #740b38 100%
    );
  }
`

const GridButton = ({isPlayed = true}) => {
  return (
    <Wrapper isPlayed={isPlayed}>
      
    </Wrapper>
  )
}

export default GridButton
