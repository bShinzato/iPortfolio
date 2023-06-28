import React from 'react';
import './App.css';
import Navbar from './components/NavBar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import adventures from './components/pages/Adventures';
import family from './components/pages/Family';
import physicalFitness from './components/pages/PhysicalFitness';
import hobbies from './components/pages/Hobbies';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
       <Route path='/' exact Component={Home}/>
       <Route path='/adventures' exact Component={adventures}/>
       <Route path='/family' exact Component={family}/>
       <Route path='/physicalFitness' exact Component={physicalFitness}/>
       <Route path='/hobbies' exact Component={hobbies}/>
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
