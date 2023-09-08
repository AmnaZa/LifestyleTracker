import React from 'react';
import SignUpForm from './SignUpForm/SignUpForm';
import LoginForm from './LogInForm/LogInForm';

function AuthForms({ setUser }) {
  return (
    <div>
      <h2>Sign Up</h2>
      <SignUpForm setUser={setUser} />
      <h2>Log In</h2>
      <LoginForm setUser={setUser} />
    </div>
  );
}

export default AuthForms;
