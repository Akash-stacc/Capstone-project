import React from 'react'
import { Hero, Navbar,Companies, Meals, Achievement, Feedback, CTA, Footer } from './components'
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
      <Feedback />
      <CTA />
      <Footer />

    </div>
  )
}

export default App