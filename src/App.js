import React, { useState } from 'react';
import './App.css';
import AuthPage from './pages/AuthPage';


function App() {
  // Define the user state using useState
  const [user, setUser] = useState({});

  return (
    <main className="App">
      {/* Render the AuthPage component */}
      <AuthPage />
    </main>
  );
}

export default App;
