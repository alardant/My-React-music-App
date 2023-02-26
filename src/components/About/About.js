import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-left: 12px;

  & h2{
    text-decoration: underline ;
    text-underline-position: under;
    margin-bottom: 2rem;
    }
  & li{
    list-style: circle;
    margin-bottom: 1rem;
  }

`

const About = () => {
  return (
    <Wrapper>
      <h2>📘How to use the app : </h2>
      <ol>
        <li>Try to use the music box by clicking the buttons - you can also use the A / Z / E /R of the keyboard to trigger them.</li>
        <li>Feel free the change the existing sound with your favorite music by clicking the 🎵 symbol.</li>
        <li>Enjoy the music box as much as you like !</li>
      </ol>
    </Wrapper>
  )
}

export default About
