import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';

import './home.css'; // Import your custom styles
import CalmMusic from './Calm.mp3';

function HomePage({ user, setUser }) {
  const [volume, setVolume] = useState(0.5); // Initial volume is set to 0.5 (50%)

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    const audioElement = document.getElementById('background-music');
    audioElement.volume = parseFloat(e.target.value);
  };

  useEffect(() => {
    // Start audio playback when the component mounts
    const audioElement = document.getElementById('background-music');
    audioElement.play();
  }, []);

  return (
    <div>
      <NavBar /> {/* Render the navigation bar on the home page */}
      <div className="home-container">
        <div className="home-content">
 
          <title>FIT-MIND</title>
          
          <link href="https://fonts.googleapis.com/css?family=Courgette|Open+Sans&display=swap" rel="stylesheet" />
         
          {/* Use the standard HTML5 <audio> element with the same class and ID */}
         
          <div class="slider"></div>
          <h2 className="exciting-heading">
            Hello, {user ? user.name : 'Guest'}!
          </h2>

          <div className="audio-container">
            <audio id="background-music" controls autoPlay volume={volume}>
              <source src={CalmMusic} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          
            <div className="audio-controls">
              <input
                type="range"
                id="background-music"
                className="volume-control"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>

          <section>
          
            <div className="glowing">
              <span style={{ '--i': '1' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '3' }}></span>
            </div>

            <div className="glowing">
              <span style={{ '--i': '1' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '3' }}></span>
            </div>

            <div className="glowing">
              <span style={{ '--i': '1' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '3' }}></span>
            </div>

            <div className="glowing">
              <span style={{ '--i': '1' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '3' }}></span>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
