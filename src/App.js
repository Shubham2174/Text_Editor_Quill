import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
 return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Edit/:postID" element={<Edit />} />
        </Routes>
      </Router>
    </div>
 );
}

export default App;
