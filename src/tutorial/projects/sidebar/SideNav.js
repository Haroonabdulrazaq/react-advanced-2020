import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Team from './Team';
import Calendar from './Calendar';
import Navbar from './Navbar';
import Project from './Project';
import Document from './Document';
import Error from './Error';
import './sidenav.css';


const SideNav = ({showNav}) => {

  return (
    <div>
      <Router>
        <div className="wrapper">
          <div className="">{showNav && <Navbar /> }</div>
        <div className="content-wrapper">
         <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
             <Route exact path="/team">
              <Team />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/Calendar">
              <Calendar />
            </Route>
            <Route path="/document">
              <Document />
            </Route>
            <Route path="/*">
              <Error />
            </Route>
          </Switch>
        </div>
        </div>
      </Router>
    </div>
  )
}

export default SideNav;
