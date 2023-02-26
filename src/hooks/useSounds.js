import { useEffect, useRef, useState } from 'react'
import * as Tone from 'tone'

const useSounds = () => {

  const mySampler = useRef(null);


  const [isAButtonPlayed, setisAButtonPlayed] = useState(false)
  const [isZButtonPlayed, setisZButtonPlayed] = useState(false)
  const [isEButtonPlayed, setisEButtonPlayed] = useState(false)
  const [isRButtonPlayed, setisRButtonPlayed] = useState(false)

  useEffect(() => {
    const sampler = new Tone.Sampler({
      urls: {
        'C4': 'C4.mp3',
        'D#4': 'Ds4.mp3',
        'F#4': 'Fs4.mp3',
        'A4': 'A4.mp3',
      },
      release: 1,
      baseUrl: 'https://tonejs.github.io/audio/salamander/',
    }).toDestination();

    Tone.loaded().then(() => {
      mySampler.current = sampler;
    })
  }, [])

  const soundPlay = (note) => {
    mySampler.current.triggerAttackRelease([note], 4)
  }

  const handleKeyDown = ({ key }) => {
    switch (key) {
      case 'a':
        setisAButtonPlayed(true)
        window.setTimeout(() => { setisAButtonPlayed(false) }, 300)
        soundPlay('C4')
        break;
      case 'z':
        setisZButtonPlayed(true)
        window.setTimeout(() => { setisZButtonPlayed(false) }, 300)
        soundPlay('D#4')
        break;
      case 'e':
        setisEButtonPlayed(true)
        window.setTimeout(() => { setisEButtonPlayed(false) }, 300)
        soundPlay('F#4')
        break;
      case 'r':
        setisRButtonPlayed(true)
        window.setTimeout(() => { setisRButtonPlayed(false) }, 300)
        soundPlay('A4')
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return (() => {
      window.removeEventListener('keydown', handleKeyDown)
    })
  })

  const handleSampleChange = (note, file) => {
    let fileURL = URL.createObjectURL(file)
    let buffer = new Tone.Buffer(fileURL)
    mySampler.current.add(note, buffer, () => alert('Sample successfully changed'))
  }

  const buttonList = [
    {
      soundPlay: () => { soundPlay('C4') },
      isPlayed: isAButtonPlayed,
      id: 'aButton',
      handleSampleChange : (e) => handleSampleChange('C4', e.target.files[0])
    },
    {
      soundPlay: () => { soundPlay('D#4') },
      isPlayed: isZButtonPlayed,
      id: 'zButton',
      handleSampleChange : (e) => handleSampleChange('D#4', e.target.files[0])
    },
    {
      soundPlay: () => { soundPlay('F#4') },
      isPlayed: isEButtonPlayed,
      id: 'eButton',
      handleSampleChange : (e) => handleSampleChange('F#4', e.target.files[0])

    },
    {
      soundPlay: () => { soundPlay('A4') },
      isPlayed: isRButtonPlayed,
      id: 'rButton',
      handleSampleChange : (e) => handleSampleChange('A4', e.target.files[0])

    }
  ]


  return { buttonList };
}



export default useSounds
