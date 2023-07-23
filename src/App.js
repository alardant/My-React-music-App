import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/UI/Layout';

import Home from './components/Home/Home';
import About from './components/About/About';

function App() {

  const [buttonState, setButtonState] = useState([]);

  return (
    <BrowserRouter basename="/My-React-music-App">
      <Layout>
        <Routes>
          <Route element={< About />} path='/about' />
          <Route element={<Home buttonState={buttonState} setButtonState={setButtonState} />} path='/' />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
