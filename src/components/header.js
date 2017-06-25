/**
 * Created by dm on 6/24/17.
 */

import React, { Component} from 'react';



class Header extends Component {

  render () {
    return (
      <header className="row">
          <h3 className="roboFont text-muted"> Robo Vacations </h3>
          <img className='img-responsive col-md-4 col-md-offset-3' src={'images/sexyrobots.jpg'} ></img>
      </header>
    );
  }
}

export default Header;
