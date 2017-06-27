import React, { Component } from 'react';
import RoboHeader from '../containers/RobotHeader';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Footer from './footer';

class Home extends Component {
  componentDidMount() {
    console.log('Home')
  }

  render () {

    return (
      <div>
      <RoboHeader />
      <SearchBar />
      <WeatherList />
      </div>
    )
  }
}

export default Home;

