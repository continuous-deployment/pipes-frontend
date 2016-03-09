import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Hosts extends Component
{
  static propTypes = {
    items: PropTypes.array
  }

  state = {
    hosts: []
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8000/api/v1/hosts',
      type: 'GET',
      dataType: 'JSON',
      success: function (data) {
        this.setState({ hosts: data.data });
      }.bind(this)
    });
  }

  render () {
    let hosts = this.state.hosts.map(function (host, index) {
        let url = 'hosts/' + host.id;
        return <Link
          to={url}
          key={host.id}
          className="list-group-item"
        >
          {host.attributes.host} : {host.attributes.port}
        </Link>;
    })

    return (
      <div>
        <Link
          to={'/hosts/store'}
          className='btn btn-lg btn-success'
        >
          <i className='glyphicon glyphicon-plus'></i> New Host
        </Link>
        <h2>Hosts</h2>
        <div class="list-group">
          {hosts}
        </div>
      </div>
    );
  }
}

export default Hosts;
