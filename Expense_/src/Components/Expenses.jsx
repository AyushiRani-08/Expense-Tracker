import React, { useEffect } from 'react'
import woman from './woman.png'
import './Expenses.css'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Expenses = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

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
            <div className="add-expense">
                <div className="add-category">
                    <input type='text' placeholder='Add category' />

                </div>
                <div className="add-date">
                    <input type='text' placeholder='Add date' />
                </div>
                <div className="mode">
                    <input type='text' placeholder='Add mode' />

                </div>
                <div className="add-amount">
                    <input type='text' placeholder='Add amount' />
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
            <div className="linechart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Expenses
