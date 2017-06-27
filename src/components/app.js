import React from 'react';
import { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Init from '../containers/init.js';
import Nav from '../components/Nav';

import About from '../components/About';
import Home from '../components/Home';
import Login from '../components/Login';
import Pics from '../components/Pics';
import Footer from '../components/footer';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Init/>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/pics" component={Pics} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}







