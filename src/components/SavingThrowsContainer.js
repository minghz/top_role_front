import React, { Component } from 'react';
import SavingThrow from './SavingThrow'
import '../css/SavingThrowsContainer.css'

class SavingThrowsContainer extends Component {
  render() {
    return(
      <div className="saving-container">
        <strong>Saving Throws</strong>
        <SavingThrow
          type="str"
          modifier={this.props.modifiers.str}
          bonus={this.props.bonus}
          proficient={this.props.savingProficiencies.str}/>
        <SavingThrow
          type="dex"
          modifier={this.props.modifiers.dex}
          bonus={this.props.bonus}
          proficient={this.props.savingProficiencies.dex}/>
        <SavingThrow
          type="con"
          modifier={this.props.modifiers.con}
          bonus={this.props.bonus}
          proficient={this.props.savingProficiencies.con}/>
        <SavingThrow
          type="int"
          modifier={this.props.modifiers.int}
          bonus={this.props.bonus}
          proficient={this.props.savingProficiencies.int}/>
        <SavingThrow
          type="wis"
          modifier={this.props.modifiers.wis}
          bonus={this.props.bonus}
          proficient={this.props.savingProficiencies.wis}/>
        <SavingThrow
          type="cha"
          modifier={this.props.modifiers.cha}
          bonus={this.props.bonus}
          proficient={this.props.savingProficiencies.cha}/>
      </div>
    )
  }
}

export default SavingThrowsContainer;
