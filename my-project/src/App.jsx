import React from 'react'
import { Hero, Navbar,Companies, Meals } from './components'
import './App.css'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies/>
      <Meals />
    </div>
  )
}

export default App