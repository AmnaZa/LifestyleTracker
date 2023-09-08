import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service';
import '../App.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
      <ul className="navbar-tabs">
        <li className="nav-item">
          <Link to="/home">Home</Link>
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
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
