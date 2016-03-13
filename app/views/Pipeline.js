import React, { Component } from 'react';
import { Link } from 'react-router';

import PipelineRow from '../components/pipeline/PipelineRow.js';

class Pipeline extends Component
{
  state = {
    pipeline: null,
    edit: false
  }

  componentDidMount() {
    $.ajax({
      url: 'http://192.168.1.114:8000/api/v1/pipeline/' + this.props.params.id,
      type: 'GET',
      dataType: 'JSON',
      success: function (data) {
        this.setState({ pipeline: data });
      }.bind(this)
    });
  }

  buildRows (pipes, rows = [], row = 0, previousSize = 12) {
    pipes = this.formatPipes(pipes, previousSize);

    if (rows[row] !== undefined) {
      rows[row] = rows[row].concat(pipes);
    } else {
      rows[row] = pipes;
    }

    for (var pipeKey in pipes) {
      if (pipes.hasOwnProperty(pipeKey) === false) {
        continue;
      }
      var pipe = pipes[pipeKey];
      var nextPipes = this.getNextPipesFromPipe(pipe.pipe);

      if (nextPipes.length === 0) {
        continue;
      }

      rows = this.buildRows(nextPipes, rows, row + 1, pipe.size);
    }

    return rows;
  }

  formatPipes (pipes, previousSize) {
    var size = previousSize / pipes.length;

    return pipes.map(function (pipe) {
      return {
        pipe: pipe,
        size: size
      };
    });
  }

  getNextPipesFromPipe(pipe) {
    var pipes = [];
    if (pipe.type === 'condition') {
      if (pipe.success !== undefined) {
        pipes.push(pipe.success);
      }

      if (pipe.failure !== undefined) {
        pipes.push(pipe.failure);
      }
    }

    if (pipe.type === 'splitter') {
      pipes = pipe.splits;
    }

    if (pipe.type === 'action') {
      if (pipe.next !== undefined) {
        pipes.push(pipe.next);
      }
    }

    return pipes;
  }

  handleSaveClick () {
    console.log('Saving');
  }

  handleEditClick () {
    this.setState({
      edit: true
    });
  }

  handleCancelClick () {
    this.setState({
      edit:false
    });
  }

  render () {
    if (this.state.pipeline === null) {
      return false;
    }

    var primaryButton = '';

    if (this.state.edit) {
      primaryButton = [<button
          className='btn btn-lg btn-success pull-right'
          onClick={this.handleSaveClick.bind(this)}
        >
          <i className='glyphicon glyphicon-save'></i> Save
        </button>,
        <button
          className='btn btn-danger btn-lg'
          onClick={this.handleCancelClick.bind(this)}
        >
          <i className='glyphicon glyphicon-remove'></i> Cancel
        </button>
      ];
    } else {
      primaryButton = <button
        className='btn btn-lg btn-success pull-right'
        onClick={this.handleEditClick.bind(this)}
      >
        <i className='glyphicon glyphicon-pencil'></i> Edit
      </button>;
    }

    var pipeline =  this.state.pipeline;

    if (Array.isArray(pipeline) === false) {
      pipeline = [pipeline];
    }

    var pipeline = this.buildRows(pipeline);

    pipeline = pipeline.map(function (pipes) {
      return <PipelineRow
        pipes={pipes}
        {...this.state}
      />;
    }.bind(this));

    return <div>
      {primaryButton}
      <ul className="list-group pipeline">
        {pipeline}
      </ul>
    </div>;
  }
}

export default Pipeline;
