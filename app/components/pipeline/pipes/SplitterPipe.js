import React, { Component, PropTypes } from 'react';

import Dispatcher from '../../../dispatcher/AppDispatcher.js';

import Pipe from './Pipe.js';
import PipeAttributes from './PipeAttributes';

class SplitterPipe extends Component
{
  static propTypes = {
    pipe: PropTypes.object,
    edit: PropTypes.bool
  }

  render () {
    return <Pipe
      pipeId={this.props.pipe.id}
      type={this.props.pipe.type}
      information={this.renderPanel()}
      icon='fullscreen'
      edit={this.props.edit} />;
  }

  renderPanel () {
    if (this.props.edit) {
      return this.renderRelationshipButtons();
    }

    return <div className='col-xs-12'>
    </div>;
  }

  renderRelationshipButtons () {
    return <button
      className='btn btn-success'
      onClick={this.handleAddClick.bind(this)}
    >
      Add split
    </button>;
  }

  handleAddClick () {
    Dispatcher.handleViewAction(
      'SHOW_MODAL',
      {
        pipeId: this.props.pipe.id,
        relationship: 'splits',
        show: true
      }
    );

  }
}

export default SplitterPipe;
