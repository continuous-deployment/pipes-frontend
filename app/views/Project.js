import React, { Component, PropTypes } from 'react';

class Project extends Component
{
  static propTypes = {
    params: PropTypes.object
  }

  render () {
    return (
      <div>
        <h3>Info for Project {this.props.params.id}</h3>
        <p>This will be all of the information about the project</p>
      </div>
    );
  }
}

export default Project;
