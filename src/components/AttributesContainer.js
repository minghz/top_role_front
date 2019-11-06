import React, { Component } from 'react';
import Attribute from './Attribute';
import '../css/AttributesContainer.css';

class AttributesContainer extends Component {
  render() {
    return(
      <div className="attributes-container">
        <Attribute name="Strength"     value={this.props.attributes.str} racial={this.props.attributes_racial.str} modifier={this.props.modifiers.str}/>
        <Attribute name="Dexterity"    value={this.props.attributes.dex} racial={this.props.attributes_racial.dex} modifier={this.props.modifiers.dex}/>
        <Attribute name="Constitution" value={this.props.attributes.con} racial={this.props.attributes_racial.con} modifier={this.props.modifiers.con}/>
        <Attribute name="Inteligence"  value={this.props.attributes.int} racial={this.props.attributes_racial.int} modifier={this.props.modifiers.int}/>
        <Attribute name="Wisdom"       value={this.props.attributes.wis} racial={this.props.attributes_racial.wis} modifier={this.props.modifiers.wis}/>
        <Attribute name="Charisma"     value={this.props.attributes.cha} racial={this.props.attributes_racial.cha} modifier={this.props.modifiers.cha}/>
      </div>
    )
  }
}

export default AttributesContainer;
