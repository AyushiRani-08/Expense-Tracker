import React, { useState, useEffect } from 'react';
import userimg from './user.png'
import sastra from './sastra.jpeg';
import './Expenses.css';
import Sidebar from "./Sidebar";
const Expenses = ({ expenses, setExpenses }) => {
    const getCategoryTotals = () => {
        const totals = {};
        expenses.forEach(exp => {
            if (totals[exp.category]) {
                totals[exp.category] += Number(exp.amount);
            } else {
                totals[exp.category] = Number(exp.amount);
            }
        });
        return totals;
    };

    const [search, setSearch] = useState('');


    const [input, setInput] = useState({
        category: "",
        amount: "",
        date: "",
        mode: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };


    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);
    const filteredExpenses = expenses.filter(exp =>
        exp.category.toLowerCase().includes(search.toLowerCase()) ||
        exp.date.toLowerCase().includes(search.toLowerCase()) ||
        exp.mode.toLowerCase().includes(search.toLowerCase()) ||
        exp.amount.toString().includes(search)
    );

    // Add a new blank expense row
    const addExpense = () => {
        if (!input.category || !input.amount || !input.date || !input.mode) {
            alert("Please fill all fields");
            return;
        }
        const newExpense = {
            id: expenses.length + 1,
            category: (input.category),
            amount: (input.amount),
            date: (input.date),
            mode: (input.mode)
        };
        setExpenses([...expenses, newExpense]);

        setInput({ category: "", amount: "", date: "", mode: "" });
    };

    // Clock and date
    useEffect(() => {

        const updateDateTime = () => {
            const now = new Date();
            document.getElementById("date").textContent = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            document.getElementById("time").textContent = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
        };
        updateDateTime();
        const interval = setInterval(updateDateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-sec">

            <div className="navbar">
                <div className="logo">
                    <img src={sastra} alt="" />
                </div>


                <div className="search-input">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search expenses, transactions" />
                </div>
                <div className="profile">
                    <div className="profile-icon">
                        <img src={userimg} alt="Profile" />
                    </div>
                    <div className="profile-text">
                        <p>Hii, Ayushi</p>
                        <span>Track all your expenses</span>
                    </div>
                </div>

                <div className="date-time">
                    <p id="date"></p>
                    <span id="time"></span>
                </div>
            </div>

            <div className="add-expense">
                <div className="add-category">
                    <input type="text" name="category" value={input.category} placeholder="Add category" onChange={handleChange} />
                </div>
                <div className="add-date">
                    <input type="text" name="date" value={input.date} placeholder="Add date" onChange={handleChange} />
                </div>
                <div className="mode">
                    <input type="text" name="mode" value={input.mode} placeholder="Add mode" onChange={handleChange} />
                </div>
                <div className="add-amount">
                    <input type="text" name="amount" value={input.amount} placeholder="Add amount" onChange={handleChange} />
                </div>
                <button onClick={addExpense}>Add Expense</button>
            </div>

            <div className="expense">
                <div className="expenses-sec">
                    {expenses.length == 0
                        ? <p style={{ textAlign: "center" }}>No expenses till now!</p>
                        :
                        <table>
                            <thead>
                                <tr>
                                    <th>S No</th>
                                    <th>Category</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Mode</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredExpenses.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: "center" }}>
                                            No results found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredExpenses.map(exp => (
                                        <tr key={exp.id}>
                                            <td>{exp.id}</td>
                                            <td>{exp.category}</td>
                                            <td>{exp.amount}</td>
                                            <td>{exp.date}</td>
                                            <td>{exp.mode}</td>
                                        </tr>
                                    ))
                                )}



                            </tbody>
                        </table>

                    }

                </div>
                <div className="category-totals expenses-sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Total expense as per category </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(getCategoryTotals()).map(([category, tamount]) => (
                                <tr key={category}>
                                    <td>{category}</td>
                                    <td>₹{tamount}</td>
                                </tr>


                            ))}
                            <tr>
                                <td><strong>Total</strong></td>
                                <td>
                                    <strong>
                                        ₹{Object.values(getCategoryTotals()).reduce((acc, curr) => acc + curr, 0)}
                                    </strong>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>






        </div>
    );
};

export default Expenses;
