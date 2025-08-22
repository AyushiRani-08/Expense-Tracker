import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Expenses from './Components/Expenses'
import LIneChartComponent from './Components/LIneChartComponent'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Sidebar/>
        <Expenses/>
        {/* <LIneChartComponent/> */}
        

        
        
      </div>
      
    </>
  )
}

export default App
