import React, { Component, PropTypes } from 'react';

import Pipe from './Pipe.js';
import PipeAttributes from './PipeAttributes.js';
import ConditionForm from '../pipe-forms/ConditionForm.js';
import NewPipeModal from '../NewPipeModal.js';

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
        <NewPipeModal
          pipeId={this.props.pipe.id}
          relationship='failure'
          modalId={'addFailureModal' + this.props.pipe.id} />
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
        data-toggle="modal"
        data-target={'#addFailureModal' + this.props.pipe.id}
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
