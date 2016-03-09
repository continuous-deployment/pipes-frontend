import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Host extends Component
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
        <Link to='/hosts' className='btn btn-lg btn-danger'>
          <i className='glyphicon glyphicon-chevron-left'></i> Back to Hosts
        </Link>

        <Link
          to={'/hosts/' + this.state.host.id + '/update'}
          className='btn btn-lg btn-success pull-right'
        >
          <i className='glyphicon glyphicon-pencil'></i> Edit Host
        </Link>
        <h2>Host: <b>{this.state.host.attributes.host}</b></h2>
        <p>Port: {this.state.host.attributes.port}</p>
      </div>);
  }
}

export default Host;
