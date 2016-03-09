import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import HostForm from './HostForm.js';

class HostUpdate extends Component
{
  static propTypes = {
    params: PropTypes.object
  }

  state = {
    host: null
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8000/api/v1/hosts/' + this.props.params.id,
      type: 'GET',
      dataType: 'JSON',
      success: function (data) {
        this.setState({ host: data.data });
      }.bind(this)
    });
  }

  render () {
    if (this.state.host === null) {
      return false;
    }

    return (
      <div>
        <Link
          to={'/hosts/' + this.state.host.id}
          className='btn btn-lg btn-danger'
        >
          <i className='glyphicon glyphicon-chevron-left'></i> Back to Host
        </Link>
        <h2>
          <b> {this.state.host.attributes.host}</b>:
          {this.state.host.attributes.port}
        </h2>
        <HostForm
          action={'http://localhost:8000/api/v1/hosts/' + this.state.host.id + '/update'}
          method='PATCH'
          host={this.state.host.attributes.host}
          port={this.state.host.attributes.port}
        />
      </div>);
  }
}

export default HostUpdate;
