import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import NavBar from './NavBar.js';

class App extends Component
{
  static propTypes = {
    children: PropTypes.object
  }

  render () {
    return (
      <div>
        <NavBar />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
