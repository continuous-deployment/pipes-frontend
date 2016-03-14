import React, { Component } from 'react';
import { Link } from 'react-router';

import PipelineRow from '../components/pipeline/PipelineRow.js';
import PipeUtils from '../utils/PipeUtils.js';
import PipelineStore from '../stores/PipelineStore.js';

import NewPipeModal from '../components/pipeline/NewPipeModal.js';
import NewPipeModalStore from '../stores/NewPipeModalStore.js';

class Pipeline extends Component
{
  state = {
    pipeline: null,
    edit: false,
    newPipeModal: {}
  }

  componentDidMount() {
    var newPipelineData = function () {
      PipelineStore.getPipeline(this.props.params.id, function (data) {
        this.setState({ pipeline: data });
      }.bind(this));
    }.bind(this);
    newPipelineData();

    PipelineStore.addListener(function () {
      newPipelineData();
    }.bind(this));


    var newModalData = function () {
      var data = NewPipeModalStore.getSettings();

      this.setState({
        newPipeModal: data
      });
    }.bind(this);

    NewPipeModalStore.addListener(function () {
      newModalData();
    }.bind(this));

    newModalData();
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
      var nextPipes = PipeUtils.getNextPipesFromPipe(pipe.pipe);

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
      primaryButton = <button
          className='btn btn-danger btn-lg pull-right'
          onClick={this.handleCancelClick.bind(this)}
        >
          <i className='glyphicon glyphicon-remove'></i> Cancel
        </button>;
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
      <div className='sidebar'>
        <h1>Sidebar</h1>
      </div>
      <ul className="list-group pipeline">
        {pipeline}
      </ul>
      <NewPipeModal
        pipeId={this.state.newPipeModal.pipeId}
        relationship={this.state.newPipeModal.relationship}
        show={this.state.newPipeModal.show} />
    </div>;
  }
}

export default Pipeline;
