import React from 'react';
import Navbar from './components/Navbar.js';
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import Footer from './components/Footer.js';
import {Routes,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
             <Route path = "/" exact element = {<Home/>} />
             <Route path = "/menu" exact element = {<Menu/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
