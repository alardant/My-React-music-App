import React from 'react'
import styled from 'styled-components'
import GridButton from './GridButton';
import useSounds from '../../hooks/useSounds'


const Wrapper = styled.div`
display: flex;
  height: calc(100vh - 162px);
  width: 100%;
  position: relative;
  align-items: center;
  & p{
  position: absolute;
  bottom: 1rem;
  right: 12px;
  font-style: italic;
  font-size: 14px;
  }
`

const Grid = styled.div`
  display: grid;
  width: 400px;
  height: 400px;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px;
  margin: auto;
  @media(max-width : 640px){
    width: 300px;
    height: 300px;
  }
  `

const Home = ({ buttonState, setButtonState }) => {

  const { buttonList } = useSounds();

  return (
    <Wrapper>
      <Grid>
        {buttonList.map(({ soundPlay, isPlayed, id, handleSampleChange, style }, index) => {
          return (
            <GridButton
              key={index}
              soundPlay={soundPlay}
              isPlayed={isPlayed}
              id={id}
              handleSampleChange={handleSampleChange}
              buttonState={buttonState}
              setButtonState={setButtonState}
            />)
        })}
      </Grid>
      <p>To know more about the music box, feel free to access the about page.</p>
    </Wrapper>
  )
}

export default Home
