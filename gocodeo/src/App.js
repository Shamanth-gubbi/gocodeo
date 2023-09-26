// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Dashboard from '../src/dashboard/Dashboard';
import SideNavBar from "../src/components/Navbar";
import Navbar from '../src/components/Navbar';
import Bind  from './Bind';
function App() {
  return (
    <Router>
      <Bind />
      
    </Router>
  );
}

export default App;
