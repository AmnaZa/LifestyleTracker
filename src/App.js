import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StartingPage from './components/StartingPage/StartingPage';
import HomePage from './pages/Home/HomePage';
import About from './pages/About/About';
import WaterCalculator from './components/WaterInTake/WaterInTake';
import BMICalculator from './components/BMICalculator /BMICalculator';
import Articles from './pages/Articles/Articles';
import ArticleDetail from './pages/Articles/ArticleDetail';
import YogaExercises from './components/YogaExercise/YogaExercise'; 
import LogInForm from './components/LogInForm/LogInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import { getUser, logOut } from './utilities/users-service';

function App() {
  const [showHome, setShowHome] = useState(false);
  const [user, setUser] = useState(null); // Initialize as null

  useEffect(() => {
    const loggedInUser = getUser();
    if (loggedInUser) {
      setUser(loggedInUser);
    }

    const animationTimeout = setTimeout(() => {
      setShowHome(true);
    }, 6000);

    return () => clearTimeout(animationTimeout);
  }, []);

  const handleLogOut = () => {
    logOut();
    setUser(null);
  };

  const handleStartClick = () => {
    setShowHome(true);
  };

  return (
    <Router>
      <div className="App">
        {showHome ? (
          <NavBar user={user} onLogOut={handleLogOut} />
        ) : null}
        <div className="page-container">
          <Routes>
            <Route path="/" element={<StartingPage handleStartClick={handleStartClick} />} />
            <Route path="/home" element={<HomePage user={user} />} />
            <Route path="/about" element={<About />} />
            <Route path="/bmi" element={<BMICalculator />} />
            <Route path="/wit" element={<WaterCalculator />} />
            <Route path="/yoga" element={<YogaExercises />} />
            <Route path="/articles/*" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/login" element={<LogInForm setUser={setUser} />} />
            <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
