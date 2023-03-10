import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Meals from './components/Meals';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import './App.css'


function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/companies" component={Companies} />
          <Route exact path="/meals" component={Meals} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </div>
    </Router>
  );
}

export { AppRoutes, App };
