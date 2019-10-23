import React, { Component } from 'react';
import '../css/Attribute.css';

class Attribute extends Component {
  render() {
    return(
      <div className="attribute">
        <div className="attribute-name">{this.props.name}</div>
        <div className="attribute-value">{this.props.value}</div>
        <div className="attribute-mod">{this.props.modifier}</div>
      </div>
    )
  }
}

export default Attribute;
