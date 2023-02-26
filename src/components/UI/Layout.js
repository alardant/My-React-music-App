import styled, { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import GlobalStyle from './GlobalStyle'

import lighTheme from './themes/light.json'
import darkTheme from './themes/dark.json'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Wrapper = styled.div``

const Main = styled.div`
  min-height: calc(100vh - 162px);
  width : 96%;
  max-width: 1240px;
  margin : auto;
  display: flex;
  `


const Layout = ({ children }) => {

  const [isLight, setIsLight] = useState(true);

  const handleToggleTheme = () => {
    setIsLight(!isLight)
  }

  return (
    <ThemeProvider theme={isLight ? lighTheme : darkTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header/>
        <Main>
          {children}
        </Main>
        <Footer isLight={isLight} handleToggleTheme={handleToggleTheme} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
