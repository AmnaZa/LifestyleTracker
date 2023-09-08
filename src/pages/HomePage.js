import React from 'react';
import NavBar from '../components/NavBar';
import '../App.css';

function HomePage({ user, setUser })  {
  return (
    <div>
      <NavBar user={user} />
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to the Home Page</h1>
          <p>This is the content of your home page.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
