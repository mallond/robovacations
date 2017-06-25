/**
 * Created by dm on 6/25/17.
 *//**
 * Created by dm on 6/24/17.
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadRobots} from '../actions/loadRobots';




class Init extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    const robots = {};
    robots.robots = [{robot:1},{robot:2},{robot:3},{robot:4}]

    this.props.loadRobots(robots);

  }

  render () {
    return (
      <span hidden>INIT</span>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadRobots }, dispatch);
}

export default connect(null, mapDispatchToProps)(Init);

