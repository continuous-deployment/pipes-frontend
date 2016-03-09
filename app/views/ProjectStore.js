import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectForm from './ProjectForm.js';

class ProjectStore extends Component
{
  render () {
    return (
      <div>
        <Link
          to={'/projects'}
          className='btn btn-lg btn-danger'
        >
          <i className='glyphicon glyphicon-chevron-left'></i> Back to Projects
        </Link>
        <h2>
          New <b>Project</b>
        </h2>
        <ProjectForm
          action='http://localhost:8000/api/v1/projects/store'
          method='POST'
          name=''
          group=''
          url=''
          project_id=''
        />
      </div>);
  }
}

export default ProjectStore;
