import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Project extends Component
{
  static propTypes = {
    params: PropTypes.object
  }

  state = {
    project: null
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8000/api/v1/projects/' + this.props.params.id,
      type: 'GET',
      dataType: 'JSON',
      success: function (data) {
        this.setState({ project: data.data });
      }.bind(this)
    });
  }

  render () {
    if (this.state.project === null) {
      return false;
    }

    return (
      <div>
        <Link to='/projects' className='btn btn-lg btn-danger'>
          <i className='glyphicon glyphicon-chevron-left'></i> Back to Projects
        </Link>

        <Link
          to={'/projects/' + this.state.project.id + '/update'}
          className='btn btn-lg btn-success pull-right'
        >
          <i className='glyphicon glyphicon-pencil'></i> Edit Project
        </Link>
        <h2>{this.state.project.attributes.group} / <b>{this.state.project.attributes.name}</b></h2>
        <a href={this.state.project.attributes.url} target='_blank'>
          {this.state.project.attributes.url}
        </a>
      </div>);
  }
}

export default Project;
