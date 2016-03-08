import React, { Component, PropTypes } from 'react';

class Projects extends Component
{
  static propTypes = {
    items: PropTypes.array
  }

  render () {
    return (
      <div>
        <h2>Projects</h2>
        {this.props.items || 'This will be a list of projects'}
      </div>
    );
  }
}

export default Projects;
