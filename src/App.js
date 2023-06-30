import React from 'react';
import './App.css';
import Navbar from './components/NavBar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import adventures from './components/pages/Adventures';
import family from './components/pages/Family';
import physicalFitness from './components/pages/PhysicalFitness';
import hobbies from './components/pages/Hobbies';
import Projects from './components/pages/Projects';
import NotFound from './components/pages/NotFound';
import AboutMe from './components/pages/AboutMe';



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
       <Route path='/aboutme' exact Component={AboutMe}/>
       <Route path='/projects' exact Component={Projects}/>
       <Route path='*' exact Component={NotFound}/>
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
