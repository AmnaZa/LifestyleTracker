import React from 'react';
import Image from '../Images/calming-image.jpg'
import './about.css'



function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1 className="about-title">About Our App</h1>
        <p className="about-subtitle">Finding Balance in Every Breath</p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2 className="about-section-title">Our Mission</h2>
          <p>
            At Meditation Life Tracker, we are dedicated to helping you find peace, balance, and
            mindfulness in your daily life. Our app is designed to guide you on your journey toward
            a more centered and fulfilled life.
          </p>
        </div>

        <div className="about-image">
        <img src={Image} alt="BImage" />

        </div>
      </section>

      <section className="about-features">
        <h2 className="about-section-title">Key Features</h2>
        <ul className="about-feature-list">
          <li>
            <i className="fa fa-check-circle"></i> Daily Meditation Sessions
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Life Tracking and Goal Setting
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Mindful Breathing Exercises
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Personalized Insights and Recommendations
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
