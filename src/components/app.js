import React from 'react';
import { Component } from 'react';

import Header from './header';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Footer from './footer';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBar />
        <WeatherList />
        <Footer />
      </div>
    );
  }
}







