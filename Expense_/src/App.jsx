import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Expenses from './Components/Expenses'


function App() {
  const [expenses, setExpenses] = useState(() => {
    try {
      const saved = localStorage.getItem("expenses");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  return (
    <>
      <div className='app'>
        <Sidebar expenses={expenses}/>

        <Expenses expenses={expenses} setExpenses={setExpenses} />
      </div>

    </>
  )
}

export default App
