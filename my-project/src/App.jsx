import React from 'react'
import { Hero, Navbar,Companies, Meals, Achievement } from './components'
import './App.css'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies/>
      <Meals />
      <Achievement />
    </div>
  )
}

export default App