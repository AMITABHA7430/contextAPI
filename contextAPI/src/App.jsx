import { useState } from 'react'
import Login from './components/login'
import Profile from './components/profile'  
import UserContextProvider from './context/usercontextProvider'

import './App.css'
import UserContextProvider from './context/usercontextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><UserContextProvider /><h1>welcome</h1><Login /><Profile /><usercontextProvider /></>
  )
}

export default App
