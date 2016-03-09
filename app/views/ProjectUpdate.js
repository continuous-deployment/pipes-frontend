import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ProjectForm from './ProjectForm.js';

class ProjectUpdate extends Component
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
        <Link
          to={'/projects/' + this.state.project.id}
          className='btn btn-lg btn-danger'
        >
          <i className='glyphicon glyphicon-chevron-left'></i> Back to Project
        </Link>
        <h2>
          {this.state.project.attributes.group} /
          <b> {this.state.project.attributes.name}</b>
        </h2>
        <ProjectForm
          action={'http://localhost:8000/api/v1/projects/' + this.state.project.id + '/update'}
          method='PATCH'
          name={this.state.project.attributes.name}
          group={this.state.project.attributes.group}
          url={this.state.project.attributes.url}
          project_id={this.state.project.attributes.project_id}
        />
      </div>);
  }
}

export default ProjectUpdate;
