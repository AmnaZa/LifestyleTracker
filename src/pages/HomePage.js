import React from 'react';
import NavBar from '../components/NavBar';
import '../App.css';
import './home.css'; // Import your custom styles

function HomePage({ user, setUser }) {
  return (
    <div>
      <NavBar /> {/* Render the navigation bar on the home page */}
      <div className="home-container">
        <div className="home-content">
          <title>FIT-MIND</title>
          <link href="https://fonts.googleapis.com/css?family=Courgette|Open+Sans&display=swap" rel="stylesheet" />

          <section>
            <h2>Hello, {user ? user.name : 'Guest'}!</h2>
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
