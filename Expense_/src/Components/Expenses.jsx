import React, { useEffect } from 'react'
import woman from './woman.png'
import './Expenses.css'
import { useState } from 'react'

const Expenses = () => {

    const [Expenses, setExpenses] = useState([
        { id: 1, category: "food", amount: 500.0, date: "12 August", mode: "Cash" },
        { id: 2, category: "stationary", amount: 50.0, date: "16 August", mode: "UPI" }
    ])
    const addExpenses = () => {
        const newExpense = {
            id: Expenses.length + 1,
            category: " ",
            amount: 0.0,
            mode: " "
        }
        setExpenses([...Expenses, newExpense])
    }

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
                    <table>
                        <thead>
                            <tr>
                                <th>S No</th>
                                <th>Amount</th>
                                <th>category</th>
                                <th>Date</th>
                                <th>Mode</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Expenses.map((exp) => (
                                <tr key={exp.id}>
                                    <td>{exp.id}</td>
                                    <td>{exp.category}</td>
                                    <td>{exp.amount}</td>
                                    <td>{exp.date}</td>
                                    <td>{exp.mode}</td>
                                </tr>

                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Expenses
