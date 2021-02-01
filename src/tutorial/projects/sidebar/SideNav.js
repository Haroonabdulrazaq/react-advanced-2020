import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Calendar from './Calendar';

const SideNav = () => {
  return (
    <div>
      <Router>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Calendar">
          <Calendar />
        </Route>
      </Router>
    </div>
  )
}

export default SideNav;
