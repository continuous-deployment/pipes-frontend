import React, { Component, PropTypes } from 'react';

import Pipe from './pipes/Pipe.js';
import PipeFactory from '../../factories/PipeFactory.js';

class PipelineRow extends Component
{
  constructor () {
    super();
    this.factory = new PipeFactory();
  }

  static propTypes = {
    pipes: PropTypes.array
  }

  render () {
    var pipes = this.props.pipes.map(function (pipe) {
      var PipeType = this.factory.make(pipe.pipe.type);
      if (PipeType === null) {
        return '';
      }

      return <div className={'col-sm-' + pipe.size} key={pipe.pipe.id + '_container'}>
        <PipeType
          pipe={pipe.pipe}
          {...this.props}
        />
      </div>;
    }.bind(this));

    return <li className="list-group-item">
      {pipes}
    </li>;
  }
}

export default PipelineRow;
