import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class HostForm extends Component
{
  static propTypes = {
    action: PropTypes.string,
    method: PropTypes.string
  }

  state = {
    host: '',
    port: '',
    alert: null
  }

  componentDidMount () {
    this.setState({
      host: this.props.host,
      port: this.props.port
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
          <label htmlFor='name'>Host</label>
          <input
            type='text'
            className='form-control'
            id='host'
            placeholder='Host'
            onChange={this.handleTextBoxChange.bind(this)}
            value={this.state.host}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='port'>Port</label>
          <input
            type='text'
            className='form-control'
            id='port'
            placeholder='Port'
            onChange={this.handleTextBoxChange.bind(this)}
            value={this.state.port}
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

export default HostForm;
