import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Articles from './pages/Articles/Articles'; 

import LogInForm from './components/LogInForm/LogInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import { getUser } from './utilities/users-service';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <Router>
      <div className="App">
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/articles/*" element={<Articles />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogInForm setUser={setUser} />} />
          <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
        </Routes>
      </div>


    </Router>
  );
}

export default App;
