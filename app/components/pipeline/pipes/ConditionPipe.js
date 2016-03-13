import React, { Component, PropTypes } from 'react';

import Pipe from './Pipe.js';
import PipeAttributes from './PipeAttributes.js';

class ConditionPipe extends Component
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
      icon='retweet'
      edit={this.props.edit} />;
  }

  renderPanel () {
    if (this.props.edit) {
      return <div>
        <div className='col-sm-6' js-data-form={this.props.pipe.id}>
          <div className='form-group'>
            <label htmlFor='type'>Type</label>
            <select
              className='form-control'
              id='type'
              defaultValue={this.props.pipe.attributes.type}
            >
              <option>if</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='field'>Field</label>
            <input
              type='text'
              className='form-control'
              id='field'
              defaultValue={this.props.pipe.attributes.field} />
          </div>
          <div className='form-group'>
            <label htmlFor='operator'>Operator</label>
            <select
              className='form-control'
              id='operator'
              defaultValue={this.props.pipe.attributes.operator}
            >
              <option>==</option>
              <option>!=</option>
              <option>&lt;=</option>
              <option>&gt;=</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='value'>Value</label>
            <input
              type='text'
              className='form-control'
              id='value'
              defaultValue={this.props.pipe.attributes.value} />
          </div>
        </div>
        <div className='col-sm-6'>
          {this.renderRelationshipButtons()}
        </div>
      </div>;
    }

    return <div className='col-sm-6'>
      <PipeAttributes
        attributes={this.props.pipe.attributes} />
    </div>;
  }

  renderRelationshipButtons () {
    var successButton = '';
    var failureButton = '';

    if (this.props.pipe.success === undefined) {
      successButton = <button
        js-data-action='ADD_SUCCESS'
        className='btn btn-success'
      >
        Add success
      </button>;
    }

    if (this.props.pipe.failure === undefined) {
      failureButton = <button
        js-data-action='ADD_FAILURE'
        className='btn btn-danger'
      >
        Add failure
      </button>;
    }

    return <div>
      {successButton}
      {failureButton}
    </div>
  }
}

export default ConditionPipe;
