import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import { Redirect, Route, Switch } from 'react-router';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";


const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route  exact  path="/" component={Home}/>
    <Route exact  path="/about" component={About}/>
    <Route  exact path="/service" component={Service}/>
    <Route  exact path="/contact" component={Contact}/>
<Redirect to="/"/>
    <Home/>
    </Switch>
    </>
  )
}

export default App
