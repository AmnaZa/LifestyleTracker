import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useHistory
import * as userService from '../utilities/users-service';
import './navbar.css';
import LoginModal from './LogInForm/LoginModal';

export default function NavBar({ user, setUser }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();  // Initialize useHistory

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    navigate('/home');// Redirect to '/home' after logout
  }

  return (
    <nav className="navbar">
      <ul className="navbar-tabs">
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/workout-data">Workout Planner</Link>
        </li>
        <li className="nav-item">
          <Link to="/articles">Articles</Link>
        </li>

        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        {user ? (
          <li className="nav-item">
            <Link to="" onClick={handleLogOut} className="logout-link">
              Log Out
            </Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              {/* Open the Login Modal when clicking this link */}
              <Link to="#" onClick={() => setIsLoginModalOpen(true)}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>

      {/* Render the LoginModal component if isLoginModalOpen is true */}
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onRequestClose={() => setIsLoginModalOpen(false)}
          setUser={setUser}
        />
      )}
    </nav>
  );
}
