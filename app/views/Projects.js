import React from 'react';

let Projects = React.createClass({
  propTypes: {
    items: React.propType.array
  },
  render () {
    return (
      <div>
        <h2>Projects</h2>
        {this.props.items || 'This will be a list of projects'}
      </div>
    );
  }
});

export default Projects;
