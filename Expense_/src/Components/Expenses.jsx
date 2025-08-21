import React, { useEffect } from 'react'
import woman from './woman.png'
import './Expenses.css'

const Expenses = () => {

  useEffect(() => {
    function updateDateTime() {
      const now = new Date();

      // Format date
      const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // Format time
      const time = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit'
      });

      document.getElementById("date").textContent = date;
      document.getElementById("time").textContent = time;
    }

    updateDateTime(); // run once
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval); // cleanup when component unmounts
  }, []);

  return (
    <div className='main-sec'>
      <div className="navbar">
        <div className="profile">
          <div className="profile-icon">
            <img src={woman} alt="" />
          </div>
          <div className="profile-text">
            <p>Hii, Ayushi</p>
            <span>Track all your expenses</span>
          </div>
        </div>

        <div className="search-input">
          <input type="text" placeholder='Search expenses, transactions' />
        </div>

        {/* Date & Time Section */}
        <div className="date-time">
          <p id="date"></p>
          <span id="time"></span>
        </div>
      </div>

      <div className="expenses-sec">
        <div className="table">
          {/* Table content here */}
        </div>
      </div>
    </div>
  )
}

export default Expenses
