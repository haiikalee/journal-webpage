import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Import App component (which contains your button)
import Home from './Home'; // Import Home component
import FirstDate from './FirstDate'; // Component for First Date
import Memories from './Memories'; // Component for Settings

export default function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />   {/* Root path ("/") renders App.js */}
        <Route path="/home" element={<Home />} /> {/* /home path renders Home.js */}
        <Route path="/firstdate" element={<FirstDate />} /> {/* Route for First Date */}
        <Route path="/memories" element={<Memories />} /> {/* Route for Settings */}
      </Routes>
    </Router>
  );
}