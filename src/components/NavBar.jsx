import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service';
import '../App.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar"> {/* Apply the 'navbar' class */}
    {/* ... */}
    <Link to="" onClick={handleLogOut} className="logout-link">Log Out</Link> {/* Apply the 'logout-link' class */}
  </nav>
  )
}