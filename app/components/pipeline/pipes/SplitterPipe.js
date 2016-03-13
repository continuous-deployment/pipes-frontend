import React, { Component, PropTypes } from 'react';

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

    }

    return <div className='col-xs-12'>
    </div>;
  }
}

export default SplitterPipe;
