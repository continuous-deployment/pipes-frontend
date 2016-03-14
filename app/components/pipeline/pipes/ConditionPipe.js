import React, { Component, PropTypes } from 'react';

import Dispatcher from '../../../dispatcher/AppDispatcher.js';

import Pipe from './Pipe.js';
import PipeAttributes from './PipeAttributes.js';
import ConditionForm from '../pipe-forms/ConditionForm.js';


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
        <div className='col-md-6' js-data-form={this.props.pipe.id}>
          <ConditionForm
            type={this.props.pipe.attributes.type}
            field={this.props.pipe.attributes.field}
            operator={this.props.pipe.attributes.operator}
            value={this.props.pipe.attributes.value}
            />
        </div>
        <div className='col-sm-6'>
          {this.renderRelationshipButtons()}
        </div>
      </div>;
    }

    return <div className='col-md-6'>
      <PipeAttributes
        attributes={this.props.pipe.attributes} />
    </div>;
  }

  renderRelationshipButtons () {
    var successButton = '';
    var failureButton = '';

    if (this.props.pipe.success === undefined) {
      successButton = <button
        className='btn btn-success'
        onClick={this.handleSuccessClick.bind(this)}
      >
        Add success
      </button>;
    }

    if (this.props.pipe.failure === undefined) {
      failureButton = <button
        className='btn btn-danger'
        onClick={this.handleFailureClick.bind(this)}
      >
        Add failure
      </button>;
    }

    return <div>
      {successButton}
      {failureButton}
    </div>
  }

  handleFailureClick () {
    Dispatcher.handleViewAction(
      'SHOW_MODAL',
      {
        pipeId: this.props.pipe.id,
        relationship: 'failure',
        show: true
      }
    );
  }

  handleSuccessClick () {
    Dispatcher.handleViewAction(
      'SHOW_MODAL',
      {
        pipeId: this.props.pipe.id,
        relationship: 'success',
        show: true
      }
    );
  }
}

export default ConditionPipe;
