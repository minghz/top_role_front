import React, { Component } from 'react';
import Attribute from './Attribute';
import '../css/AttributesContainer.css';

class AttributesContainer extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type, newBase, newModifier) {
    this.props.onAttributeChange(type, newBase)
    this.props.onModifierChange(type, newModifier)
  }

  render() {
    return(
      <div className="attributes-container">
        <Attribute
          type="str"
          base={this.props.attributes.str}
          racial={this.props.attributes_racial.str}
          modifier={this.props.modifiers.str}
          onChange={this.handleChange}/>
        <Attribute
          type="dex"
          base={this.props.attributes.dex}
          racial={this.props.attributes_racial.dex}
          modifier={this.props.modifiers.dex}
          onChange={this.handleChange}/>
        <Attribute
          type="con"
          base={this.props.attributes.con}
          racial={this.props.attributes_racial.con}
          modifier={this.props.modifiers.con}
          onChange={this.handleChange}/>
        <Attribute
          type="int"
          base={this.props.attributes.int}
          racial={this.props.attributes_racial.int}
          modifier={this.props.modifiers.int}
          onChange={this.handleChange}/>
        <Attribute
          type="wis"
          base={this.props.attributes.wis}
          racial={this.props.attributes_racial.wis}
          modifier={this.props.modifiers.wis}
          onChange={this.handleChange}/>
        <Attribute
          type="cha"
          base={this.props.attributes.cha}
          racial={this.props.attributes_racial.cha}
          modifier={this.props.modifiers.cha}
          onChange={this.handleChange}/>
      </div>
    )
  }
}

export default AttributesContainer;
