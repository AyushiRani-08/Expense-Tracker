import React from 'react'
import './About.css'

const About = ({ open, setClose }) => {
  if (!open) return null; // don't render if not open

  return (
    <div className="about-overlay">
      <div className="about">
        <div className="development">
          <h2>About This App</h2>
          <p>
            This expense tracker helps you add, search, and analyze your daily
            expenses with categories, date, amount, and payment mode.
          </p>
        </div>
        <div className="features">
          <ul>
            <li>Add and view expenses with category, amount, date, and mode</li>
            <li>Search expenses instantly</li>
            <li>Real-time date and time display</li>
            <li>Categorize your expense </li>
            <li>Calculate total expenses</li>
          </ul>
        </div>
        <div className="button">
          <button onClick={setClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default About;
