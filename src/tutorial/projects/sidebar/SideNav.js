import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Calendar from './Calendar';
import Navbar from './Navbar';
import Error from './Error';

const SideNav = () => {
  return (
    <div>
      <Router>
        <Navbar/>
          <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/Calendar">
            <Calendar />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default SideNav;
