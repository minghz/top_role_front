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
    var newBase = parseInt(event.target.value) || 0
		if(newBase < 1) { newBase = 1 }

    event.target.value = newBase

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
        <div className="attribute-name" data-testid="attributeName">
          {helpers.attributeNameFromType(this.props.type)}
        </div>
        <input className="attribute-base" data-testid="attributeBase"
          type="number"
          value={this.state.base}
          onChange={this.handleBaseChange} />
        <div className="attribute-racial" data-testid="attributeRacial">
          racial: {this.state.racial}
        </div>
        <div className="attribute-value" data-testid="attributeTotal">
          {this.state.base + this.state.racial}
        </div>
        <div className="attribute-mod" data-testid="attributeMod">
          {this.state.modifier}
        </div>
      </div>
    )
  }
}

export default Attribute;
