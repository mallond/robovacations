/**
 * Created by dm on 6/24/17.
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {currentRobot:'images/sexyrobots.jpg'};
  }

  componentDidMount() {


  }

  componentWillReceiveProps(nextProps) {

    let node = '';
    nextProps.robots[0].robots.some((content)=>{

      node = content.robot;
      return true;
    });

    this.setState({currentRobot:node.trim()});
  }

  render () {
    let one = 'images/sexyrobots.jpg';
    return (

      //{this.props.weather.map(this.renderWeather)}
      <header className="row" note='{this.props.imageLink}'>
        <h3 className="roboFont text-muted"> Robo Vacations   </h3>
        <img className='img-responsive col-md-4 col-md-offset-3' src={this.state.currentRobot} ></img>
      </header>
    );
  }
}

function mapStateToProps({robots}) {

  //this.props = robots;
  return {robots};
}

export default connect(mapStateToProps)(Header);
