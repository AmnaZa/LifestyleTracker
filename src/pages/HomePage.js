import React from 'react';
import NavBar from '../components/NavBar';
import '../App.css';
import './home.css'; // Import your custom styles

function HomePage({ user, setUser })  {
  return (
    <div>
    <NavBar /> {/* Render the navigation bar on the home page */}
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to the Lifestyle Portal</h1>
          <p>Discover a healthier, happier you through body weight exercises and meditation.</p>
          <div className="animated-elements">
            <div className="element lifestyle"></div>
            <div className="element body-weight"></div>
            <div className="element meditation"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
