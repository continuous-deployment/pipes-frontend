import React, { Component, PropTypes } from 'react';

import Dispatcher from '../../dispatcher/AppDispatcher.js';
import PipeConstants from '../../constants/PipeConstants.js';

import ConditionForm from './pipe-forms/ConditionForm.js';
import ActionForm from './pipe-forms/ActionForm.js';

class NewPipeModal extends Component
{
  static propTypes = {
    modalId: PropTypes.string,
    relationship: PropTypes.string,
    pipeId: PropTypes.string
  }

  state = {
    pipe_type: 'condition',
    attributes: {}
  }

  render () {
    var form = this.getFormByType(this.state.pipe_type);

    return <div className='modal fade' tabIndex='-1' role='dialog' id={this.props.modalId}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <h4 className='modal-title'>Add new pipe</h4>
          </div>
          <div className='modal-body'>
            <div className='form-group'>
              <label htmlFor='pipe_type'>Pipe Type</label>
              <select
                className='form-control'
                id='pipe_type'
                onChange={this.handleOnPipeTypeChange.bind(this)}
                defaultValue={this.state.pipe_type}
              >
                <option value='condition'>Condition</option>
                <option value='splitter'>Splitter</option>
                <option value='action'>Action</option>
              </select>
            </div>
            <hr />
            {form}
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-danger'
              data-dismiss='modal'
            >
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-success'
              data-dismiss='modal'
              onClick={this.handleAdd.bind(this)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>;
  }

  getFormByType (type) {
    if (type === 'condition') {
      return <ConditionForm
        type=''
        field=''
        operator=''
        value=''
        changeHandler={this.handleFormControlChange.bind(this)} />
    }

    return '';
  }

  handleFormControlChange (event) {
    var $target = window.$(event.target);
    var attributes = this.state.attributes;

    attributes[$target.prop('id')] = $target.val();

    this.setState({
      attributes: attributes
    });
  }

  handleOnPipeTypeChange (event) {
    this.setState({
      pipe_type: event.target.value
    });
  }

  handleAdd () {
    Dispatcher.handleViewAction(
      'ADD_PIPE',
      {
        type: this.state.pipe_type,
        attributes: this.state.attributes,
        relationship: this.props.relationship,
        parentPipeId: this.props.pipeId
      }
    );
  }
}

export default NewPipeModal;
