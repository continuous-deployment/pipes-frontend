import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Projects extends Component
{
  static propTypes = {
    items: PropTypes.array
  }

  state = {
    projects: []
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8000/api/v1/projects',
      type: 'GET',
      dataType: 'JSON',
      success: function (data) {
        this.setState({ projects: data.data });
      }.bind(this)
    });
  }

  render () {
    let projects = this.state.projects.map(function (project, index) {
        let url = 'projects/' + project.id;
        return <Link
          to={url}
          key={project.id}
          className="list-group-item"
        >
          {project.attributes.name} / {project.attributes.group}
        </Link>;
    })

    return (
      <div>
        <h2>Projects</h2>
        <div class="list-group">
          {projects}
        </div>
      </div>
    );
  }
}

export default Projects;
