import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import PipeAttributes from './PipeAttributes';

class Pipe extends Component
{
  static propTypes = {
    information: PropTypes.object,
    pipeId: PropTypes.string,
    edit: PropTypes.bool,
    type: PropTypes.string,
    icon: PropTypes.string
  }

  state = {
    stats: false
  }

  handlePipeClick () {
    this.setState({
      stats: !this.state.stats
    });
  }

  render () {
    var information = '';

    if (this.props.information !== '') {
      information = <div className={'information ' + (this.state.stats ? '' : 'hide') }>
        <h3 className='text-center visible-xs'>{this.props.type.capitalizeFirstLetter()}</h3>
        {this.props.information}
      </div>;
    }

    return <div key={this.props.pipeId}>
      <div
        className={'pipe ' + (this.state.stats ? 'active' : '') }
        onClick={this.handlePipeClick.bind(this)}
      >
        <div className="pipe-content">
          <span className={'glyphicon glyphicon-' + this.props.icon}></span>
          <p className='hidden-xs'>{this.props.type.capitalizeFirstLetter()}</p>
        </div>
      </div>
      {information}
    </div>;
  }
}

export default Pipe;
