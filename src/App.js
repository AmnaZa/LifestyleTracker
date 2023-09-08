import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AuthForms from './components/AuthForms';
import { useState } from 'react';
import { getUser } from './utilities/users-service';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <Router>
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                {/* Add more navigation links here */}
              </ul>
            </nav>
            <Routes>
              <Route path="/home" element={<HomePage user={user} setUser={setUser} />} />
              {/* Add more Route elements for other pages */}
            </Routes>
          </>
        ) : (
          <AuthForms setUser={setUser} />
        )}
      </Router>
    </main>
  );
}

export default App;
