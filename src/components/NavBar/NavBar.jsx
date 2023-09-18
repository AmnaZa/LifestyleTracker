import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './navbar.css';
import LoginModal from '../LogInForm/LoginModal';

export default function NavBar({ setUser }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUserState] = useState(null); // Rename the state to avoid conflicts

  useEffect(() => {
    const loggedInUser = userService.getUser();
    if (loggedInUser) {
      setUserState(loggedInUser); // Set the user state if user is logged in
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  function handleLogOut() {
    userService.logOut();
    setIsLoggedIn(false);
    setUserState(null); // Set user state to null
    setUser(null); // Call the setUser prop to update the user in the parent component
  }
  

  return (
    <nav className="navbar">
      <ul className="navbar-tabs">
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/workout-data">Yoga Exercises</Link>
        </li>
        <li className="nav-item">
          <Link to="/bmi">BMI Calculator</Link>
        </li>
        <li className="nav-item">
          <Link to="/wit">Water-In-Take</Link>
        </li>
        <li className="nav-item">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="nav-item">
              <span className="user-name">{user.name}</span>
            </li>
            <li className="nav-item">
              <Link to="#" onClick={handleLogOut} className="logout-link">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
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

      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onRequestClose={() => setIsLoginModalOpen(false)}
          setUser={(user) => {
            setUserState(user);
            setIsLoggedIn(true);
            setUser(user); // Call the setUser prop to update the user in the parent component
          }}
        />
      )}
    </nav>
  );
}