import React, { Component, PropTypes } from 'react';

import Pipe from './Pipe.js';
import PipeAttributes from './PipeAttributes';

class ActionPipe extends Component
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
      icon='console'
      edit={this.props.edit} />;
  }

  renderPanel () {
    if (this.props.edit) {
      return <div className='col-sm-6' js-data-form={this.props.pipe.id}>
        <div className='form-group'>
          <label htmlFor='type'>Type</label>
          <select
            className='form-control'
            id='type'
            defaultValue={this.props.pipe.attributes.type}
          >
            <option>SSH</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='host_id'>Host Id</label>
          <input
            type='text'
            className='form-control'
            id='host_id'
            defaultValue={this.props.pipe.attributes.host_id} />
        </div>
      </div>;
    }

    return <div className='col-sm-6'>
      <PipeAttributes
        attributes={this.props.pipe.attributes} />
    </div>;
  }
}

export default ActionPipe;
