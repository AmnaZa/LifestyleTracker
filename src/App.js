import React, { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LogInForm from './components/LogInForm/LogInForm'
import SignUpForm from './components/SignUpForm/SignUpForm'
import { getUser } from './utilities/users-service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <Router>
      <div className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<HomePage user={user} />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogInForm setUser={setUser} />} />
            <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
