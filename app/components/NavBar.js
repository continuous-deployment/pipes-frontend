import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component
{
  render () {
    return <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand'>Pipes</a>
          </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='projects'>Projects</Link></li>
            <li><Link to='hosts'>Hosts</Link></li>
          </ul>
        </div>
      </div>
    </nav>;
  }
}

export default NavBar;
