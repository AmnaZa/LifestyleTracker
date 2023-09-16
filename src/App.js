import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyUserContext from './pages/UserContext'; // Import your context
import NavBar from "./components/NavBar/NavBar";
import StartingPage from "./components/StartingPage/StartingPage";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import Articles from "./pages/Articles/Articles";
import LogInForm from "./components/LogInForm/LogInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import { getUser } from "./utilities/users-service";

function App() {
  const [showHome, setShowHome] = useState(false);
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
    <MyUserContext.Provider value={user}> {/* Provide the 'user' value */}
      <Router>
        <div className="App">
          {showHome ? <NavBar user={user} setUser={setUser} /> : null}
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
    </MyUserContext.Provider>
  );
}

export default App;
