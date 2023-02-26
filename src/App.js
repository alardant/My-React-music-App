import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/UI/Layout';

import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={< About/>} path='/about'/>
          <Route element={<Home />} path='/'/>
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
