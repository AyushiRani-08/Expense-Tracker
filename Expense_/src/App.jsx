import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Expenses from './Components/Expenses'







function App() {
  const [expenses, setExpenses] = useState([]);
  return (
    <>
      <div className='app'>
        <Sidebar expenses={expenses} />
        
        <Expenses expenses={expenses} setExpenses={setExpenses} />
      </div>

    </>
  )
}

export default App
