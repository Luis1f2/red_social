import { useState } from 'react'
import {BrouserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from '../src/components/pages/header/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header key="header"></Header>
    </Router>
  )
}

export default App
