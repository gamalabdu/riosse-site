import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer/MainContainer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Epk from './components/Epk/Epk';
import Visuals from './components/Visuals/Visuals';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainContainer/> }>
            <Route index element={ <Home/>} />
            <Route path="home" element={ <Home/>} />
            <Route path="about" element={ <About/>} />
            <Route path="contact" element={ <Contact/>} />
            <Route path="gallery" element={ <Gallery/>} />
            <Route path="visuals" element={ <Visuals/>} />
        </Route>
        <Route path="epk" element={ <Epk/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
