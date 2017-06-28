import React, { Component } from 'react';

class About extends Component {
  componentDidMount() {
    console.log('About');
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        <div className="course-header group">
        <ul className="course-nav">
          <li><a href='https://github.com/mallond/robovacations' target="_blank">Git Build Hints</a></li>
          <li><a href='https://github.com/mallond/robovacations/blob/master/react-redux.md' target="_blank">Git Architecture </a></li>
          <li><a href='http://redux.js.org/docs/basics/UsageWithReact.html' target="_blank">Redux React Usage</a></li>
        </ul>
        </div>
      </div>
  );
  }
}

export default About;

