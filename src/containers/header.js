/**
 * Created by dm on 6/24/17.
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




class Header extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render () {
    return (
      <header className="row">
          <h3 className="roboFont text-muted"> Robo Vacations </h3>
          <img className='img-responsive col-md-4 col-md-offset-3' src={'images/sexyrobots.jpg'} ></img>
      </header>
    );
  }
}

function mapStateToProps({robots}) {
  console.log('map state to props robots:',robots)
  return {robots};
}

export default connect(mapStateToProps)(Header);
