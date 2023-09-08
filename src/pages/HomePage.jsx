import React from 'react';
import NavBar from '../components/NavBar';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import LoginForm from '../components/LogInForm/LogInForm';
import '../App.css'; // Import your CSS file

function HomePage({ user, setUser })  {
  return (
    <div>
      <NavBar user={user} />
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to the Home Page</h1>
          <p>This is the content of your home page.</p>
        </div>
        <div className="auth-content">
          <h2>Sign Up</h2>
          <SignUpForm setUser={setUser} />
          <h2>Log In</h2>
          <LoginForm setUser={setUser} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
