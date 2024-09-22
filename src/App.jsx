import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Fullstack from './Fullstack';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import Menu from "./Menu";
import All from "./All";


const App = () => {
  return (

<div>
 
    
    <BrowserRouter> 
      <Menu></Menu>
      <Routes>
      <Route path="/" element={<All/>} />
        <Route path="/full-stack" element={<Fullstack/>} />
        <Route path="/data-science" element={<DataScience/>} />
        <Route path="/cyber-security" element={<CyberSecurity/>} />
        <Route path="/career" element={<Career/>} />
      </Routes>
      
    </BrowserRouter>
    </div>
  )

}

export default App;
 