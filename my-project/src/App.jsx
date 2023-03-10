import React from 'react'
import { Hero, Navbar,Companies, Meals } from './components'
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        {/* Add your other routes here */}
      </Switch>
    </BrowserRouter>
  );
}



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