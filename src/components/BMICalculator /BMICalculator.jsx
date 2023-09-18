// src/components/BMICalculator.js
import React, { useState } from 'react';
import './bmi.css';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const weightLb = parseFloat(weight);
      const heightIn = parseFloat(height);
      const bmiValue = (weightLb / (heightIn * heightIn)) * 703;
      setBMI(bmiValue.toFixed(2));
    }
  };

  const renderBMIInfo = () => {
    if (bmi) {
      let bmiInfo = '';
      let bmiClass = '';

      if (bmi < 18.5) {
        bmiClass = 'Underweight';
        bmiInfo = 'You are underweight. Consider consulting a healthcare professional for guidance.';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiClass = 'NormalWeight';
        bmiInfo = 'Congratulations! You are within the healthy weight range.';
      } else if (bmi >= 25 && bmi < 29.9) {
        bmiClass = 'Overweight';
        bmiInfo = 'You are overweight. Consider adopting a healthier lifestyle.';
      } else {
        bmiClass = 'Obese';
        bmiInfo = 'You are obese. Please consult a healthcare professional for advice on weight management.';
      }

      return (
        <div className="bmi-result">
          <p>Your BMI is: {bmi}</p>
          <p className={bmiClass}>Status: {bmiClass}</p>
          <p>{bmiInfo}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Weight (in lb)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="bmi-input"
      />
      <input
        type="number"
        placeholder="Height (in inches)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="bmi-input"
      />
      <button onClick={calculateBMI} className="bmi-button">Calculate BMI</button>
      {renderBMIInfo()}

      <div className="bmi-info">
        <h3>Benefits of BMI:</h3>
        <ul>
          <li>Provides a quick and simple assessment of weight relative to height.</li>
          <li>Useful as a screening tool for potential weight-related health issues.</li>
          <li>Helps individuals and healthcare professionals identify weight-related risks.</li>
        </ul>
        <h3>Pros:</h3>
        <ul>
          <li>Easy to calculate with minimal equipment.</li>
          <li>Widely used and understood by healthcare professionals.</li>
          <li>Can serve as a starting point for discussions about health and weight management.</li>
        </ul>
        <h3>Cons:</h3>
        <ul>
          <li>Does not consider other factors like muscle mass, body composition, or overall health.</li>
          <li>May not provide a complete picture of an individual's health.</li>
          <li>Should not be the sole determinant of health; consultation with a healthcare provider is recommended.</li>
        </ul>
      </div>
    </div>
  );
}

export default BMICalculator;
