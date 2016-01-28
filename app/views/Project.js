import React from 'react';

let Project = React.createClass({
  render () {
    return (
      <div>
        <h3>Info for Project {this.props.params.id}</h3>
        <p>This will be all of the information about the project</p>
      </div>
    );
  }
});

export default Project;
