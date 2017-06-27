import React from 'react';
import { Component } from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Init from '../containers/init.js';
import Nav from '../components/Nav';

import About from '../components/About';
import Home from '../components/Home';
import Footer from '../components/footer';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Init/>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pic" component={About} />
          <Route path="/login" component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}







