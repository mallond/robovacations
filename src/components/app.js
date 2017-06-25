import React from 'react';
import { Component } from 'react';

import Init from '../containers/init.js';
import Header from '../containers/header';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Footer from './footer';


export default class App extends Component {
  render() {
    return (
      <div>
        <Init/>
        <Header/>
        <SearchBar />
        <WeatherList />
        <Footer />
      </div>
    );
  }
}







