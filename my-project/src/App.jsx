import React from 'react'
import { Hero, Navbar,Companies, Meals, Achievement } from './components'
import './App.css'
import Catagories from './components/Catagories'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies/>
      <Meals />
      <Achievement />
      <Catagories />
    </div>
  )
}

export default App