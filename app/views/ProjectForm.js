import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ProjectForm extends Component
{
  static propTypes = {
    action: PropTypes.string,
    method: PropTypes.string
  }

  state = {
    name: '',
    group: '',
    project_id: '',
    url: '',
    alert: null
  }

  componentDidMount () {
    this.setState({
      name: this.props.name,
      group: this.props.group,
      url: this.props.url,
      project_id: this.props.project_id
    });
  }

  handleSave (event) {
    event.preventDefault();

    $.ajax({
      url: this.props.action,
      type: this.props.method,
      dataType: 'JSON',
      data: this.state,
      success: function (data) {
        this.setState({
          alert: {
            type: 'success',
            message: data.message
          }
        });
      }.bind(this),
      error: function (data) {
        this.setState({
          alert: {
            type: 'danger',
            message: data.responseJSON.message
          }
        });
      }.bind(this)
    });
  }

  handleTextBoxChange (event) {
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  resetAlert () {
    this.setState({
      alert: null
    });
  }

  render () {
    let alert = '';
    if (this.state.alert !== null) {
      alert = <div
        className={'alert alert-' + this.state.alert.type}
        role='alert'
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={this.resetAlert.bind(this)}
        >
          <span aria-hidden="true">
            &times;
          </span>
        </button>
        {this.state.alert.message}
      </div>
    }


    return (
      <div>
        {alert}
        <div className='form-group'>
          <label htmlFor='name'>Project Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Name'
            onChange={this.handleTextBoxChange.bind(this)}
            value={this.state.name}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='group'>Project Group</label>
          <input
            type='text'
            className='form-control'
            id='group'
            placeholder='Group'
            onChange={this.handleTextBoxChange.bind(this)}
            value={this.state.group}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='url'>Project Url</label>
          <input
            type='text'
            className='form-control'
            id='url'
            placeholder='Url'
            onChange={this.handleTextBoxChange.bind(this)}
            value={this.state.url}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='project_id'>Project Id</label>
          <input
            type='text'
            className='form-control'
            id='project_id'
            placeholder='Id of project on your VCS'
            onChange={this.handleTextBoxChange.bind(this)}
            value={this.state.project_id}
          />
        </div>
        <button
          className='btn btn-lg btn-primary'
          onClick={this.handleSave.bind(this)}
        >
          Save
        </button>
      </div>
    );
  }
}

export default ProjectForm;
