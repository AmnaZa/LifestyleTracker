// WaterCalculator.jsx
import React, { useState } from 'react';
import './WaterInTake.css' // Import your CSS file

function WaterCalculator() {
  const [weight, setWeight] = useState('');
  const [activityFactor, setActivityFactor] = useState('');
  const [climateFactor, setClimateFactor] = useState('');
  const [dailyWaterIntake, setDailyWaterIntake] = useState(null);

  const calculateWaterIntake = () => {
    const weightFloat = parseFloat(weight);
    const activityFactorFloat = parseFloat(activityFactor);
    const climateFactorFloat = parseFloat(climateFactor);

    if (!isNaN(weightFloat) && !isNaN(activityFactorFloat) && !isNaN(climateFactorFloat)) {
      const dailyIntake = weightFloat * activityFactorFloat * climateFactorFloat;
      setDailyWaterIntake(dailyIntake.toFixed(2)); // Round to 2 decimal places
    } else {
      setDailyWaterIntake(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateWaterIntake();
  };

  return (
    <div className="water-calculator">
      <h2>Water Intake Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="activityFactor">Activity Factor</label>
          <input
            type="number"
            id="activityFactor"
            value={activityFactor}
            onChange={(e) => setActivityFactor(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="climateFactor">Climate Factor</label>
          <input
            type="number"
            id="climateFactor"
            value={climateFactor}
            onChange={(e) => setClimateFactor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {dailyWaterIntake !== null && (
        <p className="result">Your daily water intake: {dailyWaterIntake} mL</p>
      )}
    </div>
  );
}

export default WaterCalculator;
