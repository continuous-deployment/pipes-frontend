import React from 'react';

let Projects = React.createClass({
  render () {
    return (
      <div>
        <h2>Projects</h2>
        {this.props.children || 'This will be a list of projects'}
      </div>
    );
  }
});

export default Projects;
