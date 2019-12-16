import React, { Component } from 'react';
import '../css/Attribute.css';
import * as helpers from '../services/helpers';

class Attribute extends Component {
  constructor(props){
    super(props);
    this.state = {
      base: this.props.base,
      racial: this.props.racial,
      modifier: this.props.modifier
    };

    this.handleBaseChange = this.handleBaseChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.racial !== prevProps.racial){
      var newRacial = this.props.racial
      var newModifier = helpers.modifierFromAttribute(this.state.base + newRacial)
      this.setState({
        racial: newRacial,
        modifier: newModifier
      })
      this.props.onChange(this.props.type, this.state.base, newModifier);
    }
  }

  handleBaseChange(event) {
    var newBase = parseInt(event.target.value)
    var newModifier = helpers.modifierFromAttribute(newBase + this.state.racial)

    this.setState({
      base: newBase,
      modifier: newModifier
    });

    this.props.onChange(this.props.type, newBase, newModifier);
  }

  render() {
    return(
      <div className="attribute">
        <div className="attribute-name">
          {helpers.attributeNameFromType(this.props.type)}
        </div>
        <div className="attribute-base">
          <input
            type="number"
            value={this.state.base}
            onChange={this.handleBaseChange} />
        </div>
        <div className="attribute-racial">racial: {this.state.racial}</div>
        <div className="attribute-value">{this.state.base + this.state.racial}</div>
        <div className="attribute-mod">{this.state.modifier}</div>
      </div>
    )
  }
}

export default Attribute;
