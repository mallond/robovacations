import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/fetchWeather';
import { updateRobots } from '../actions/updateRobots.js';




class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onInputChange(event) {

    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    console.log('STATE:', this.props);

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    const robots = {};
    robots.robots = [{robot:'images/to-come.jpg'}, {robot:'images/future.jpeg'},
      {robot:'images/robot-7.jpg'}, {robot:'images/cy-mon.jpg'},
      {robot:'images/robo-9.jpg'}, {robot:'images/robot-6.png'},
      {robot:'images/cy-mon.jpg'}, {robot:'images/sexyrobots.jpg'},
      {robot:'images/cyborg_girl.jpg'}, {robot:'images/robo-10.png'}];

    const rnd = Math.floor(Math.random() * 10);
    console.log('KJJJJJJJJJJJ',rnd)
    const selectedRobot = robots.robots[rnd];
    robots.robots = [];
    robots.robots.push(selectedRobot);
    this.props.updateRobots(robots);
    this.setState({ term: '' });
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

/**
 Notes: bindActionCreators
 Turns an object whose values are action creators, into an object with the same keys,
 but with every action creator wrapped into a
 dispatch call so they may be invoked directly.
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, updateRobots}, dispatch);
}

function mapStateToProps({robots}) {
  console.log('map state to props robots:',robots);
  return {robots};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
