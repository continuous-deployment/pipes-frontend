import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class PipelineListing extends Component
{
  static propTypes = {
    pipelines: PropTypes.array
  }

  render () {
    var pipelines = [];

    for(var pipelineKey in this.props.pipelines) {
      var pipeline = this.props.pipelines[pipelineKey];
      pipelines.push(<Link
        to={'/pipeline/' + pipeline.id}
        className='list-group-item'
      >
        {pipeline.type} {pipeline.field} {pipeline.operator} {pipeline.value}
      </Link>);
    }

    return <div className='list-group'>
      {pipelines}
    </div>;
  }
}

export default PipelineListing;
