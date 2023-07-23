import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: #058695;
  background: radial-gradient(
    circle, 
    #92cdd4 0%, 
    #058695 100%
    );
    position: relative;
    overflow: hidden;
  &::before{
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background: radial-gradient(
    circle, 
    #dec7d1 ${props => props.isPlayed ? '25%' : '0%'},
    #d75c91 100%
    );
    opacity: ${props => (props.isPlayed ? '1' : '0')};
    transition: linear 0.2s;
  }
  &:hover::before{
    opacity: 1;
  }
  &:active::before{
    opacity: 1;
    background: radial-gradient(
    circle, 
    #dec7d1 25%, 
    #d75c91 100%
    );
  }
  & input{
    display: none;
  }
  & label{
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 24px;
  }
`


const GridButton = ({ isPlayed = false, soundPlay, id, handleSampleChange, buttonState, setButtonState }) => {
  const handleClick = () => {
    // Check if the button is already in the buttonState array
    const existingButton = buttonState.find(button => button.id === id);

    // If the button is not present in the state, add it with the isPlayed value
    if (!existingButton) {
      setButtonState(prevState => [...prevState, { id, isPlayed: true }]);
    } else {
      // If the button is already present, toggle the isPlayed value
      setButtonState(prevState =>
        prevState.map(button => (button.id === id ? { ...button, isPlayed: !button.isPlayed } : button))
      );
    }

    // Call the soundPlay function
    soundPlay();
  };

  return (
    <Wrapper isPlayed={isPlayed} onClick={handleClick} >
      <label onClick={e => e.stopPropagation()} htmlFor={id}>🎵</label>
      <input onClick={e => e.stopPropagation()} id={id} type='file' onChange={handleSampleChange} />
    </Wrapper>
  )
}

export default GridButton
