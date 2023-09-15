import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import StartingPage from "./components/StartingPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Articles from "./pages/Articles/Articles";
import LogInForm from "./components/LogInForm/LogInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import { getUser } from "./utilities/users-service";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [showHome, setShowHome] = useState(false); // Initialize to false
  const [user, setUser] = useState(getUser());
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 6000);

    return () => clearTimeout(animationTimeout);
  }, []);

  const handleStartClick = () => {
    setShowHome(true);
  };

  return (
    <Router>
      <div className="App">
        {showHome ? (
          // Render the NavBar if animation is complete and Start button is clicked
          <NavBar user={user} setUser={setUser} />
        ) : null}
        <div className="page-container">
          {showHome ? (
            <Routes>
              <Route path="/" element={<StartingPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/articles/*" element={<Articles />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<LogInForm setUser={setUser} />} />
              <Route
                path="/signup"
                element={<SignUpForm setUser={setUser} />}
              />
            </Routes>
          ) : (
            <StartingPage
              handleStartClick={handleStartClick}
              animationComplete={animationComplete}
            />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
