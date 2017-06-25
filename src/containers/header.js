/**
 * Created by dm on 6/24/17.
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {robots:[]};
  }

  componentDidMount() {

  }

  render () {
    return (

      //{this.props.weather.map(this.renderWeather)}
      <header className="row">
          <h3 className="roboFont text-muted"> Robo Vacations   </h3>
          <img className='img-responsive col-md-4 col-md-offset-3' src={'images/sexyrobots.jpg'} ></img>
          <p>
            {this.props.robots.map((data)=>{
              data.robots.map((content)=>{
                console.log('YAHOO2', content);
                //this.setState({'robots':[content]})
              });
              console.log('YAHOOO',data);})

            }
          </p>
      </header>
    );
  }
}

function mapStateToProps({robots}) {
  console.log('map state to props robots:',robots);
  //this.props = robots;
  return {robots};
}

export default connect(mapStateToProps)(Header);
