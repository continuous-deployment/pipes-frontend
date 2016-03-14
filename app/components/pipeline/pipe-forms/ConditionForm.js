import React, { Component, PropTypes } from 'react';

class ConditionForm extends Component
{
  static propTypes = {
    type: PropTypes.string,
    field: PropTypes.string,
    operator: PropTypes.string,
    value: PropTypes.string,
    changeHandler: PropTypes.func
  }

  render () {
    return <div>
      <div className='form-group'>
        <label htmlFor='type'>Type</label>
        <select
          className='form-control'
          id='type'
          defaultValue={this.props.type}
          onChange={this.props.changeHandler}
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
          defaultValue={this.props.field}
          onChange={this.props.changeHandler} />
      </div>
      <div className='form-group'>
        <label htmlFor='operator'>Operator</label>
        <select
          className='form-control'
          id='operator'
          defaultValue={this.props.operator}
          onChange={this.props.changeHandler}
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
          defaultValue={this.props.value}
          onChange={this.props.changeHandler} />
      </div>
    </div>;
  }
}

export default ConditionForm;
