import React, { Component } from 'react';
import * as dataParsers from '../services/dataParsers';
import '../css/ProficienciesContainer.css';

class ProficienciesContainer extends Component {
  render() {
    return(
      <div className="proficiencies-container">
        <div className="armor-proficiencies">
          <strong>Armor Proficiencies: </strong>
          {dataParsers.armorProficienciesFromClass(this.props.class)}
        </div>
        <div className="weapon-proficiencies">
          <strong>Weapon Proficiencies: </strong>
          {dataParsers.weaponProficienciesFromClass(this.props.class)}
        </div>
        <div className="tool-proficiencies">
          <strong>Tool Proficiencies: </strong>
          {dataParsers.toolProficienciesFromClass(this.props.class)}
        </div>
      </div>
    )
  }
}

export default ProficienciesContainer;
