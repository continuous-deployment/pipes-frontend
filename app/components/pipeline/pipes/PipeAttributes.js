import React, { Component, PropTypes } from 'react';

class PipeAttributes extends Component
{
  static propTypes = {
    attributes: PropTypes.object
  }

  render () {
    var attributes = [];

    for (var attrKey in this.props.attributes) {
      if (this.props.attributes.hasOwnProperty(attrKey) === false) {
        continue;
      }
      attributes.push(<dt key={attrKey + '_title'}>{attrKey}</dt>);
      attributes.push(<dd key={attrKey + '_definition'}>
          {this.props.attributes[attrKey]}
        </dd>);
    }

    return <div className='attributes'>
      <h4>Attributes</h4>
      <dl>
        {attributes}
      </dl>
    </div>;
  }
}

export default PipeAttributes;
