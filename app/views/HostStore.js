import React, { Component } from 'react';
import { Link } from 'react-router';
import HostForm from './HostForm.js';

class HostStore extends Component
{
  render () {
    return (
      <div>
        <Link
          to={'/hosts'}
          className='btn btn-lg btn-danger'
        >
          <i className='glyphicon glyphicon-chevron-left'></i> Back to Hosts
        </Link>
        <h2>
          New <b>Host</b>
        </h2>
        <HostForm
          action='http://localhost:8000/api/v1/hosts/store'
          method='POST'
          host=''
          port=''
        />
      </div>);
  }
}

export default HostStore;
