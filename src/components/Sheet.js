import React, { Component } from 'react';
import '../css/Sheet.css';
import * as helpers from '../services/helpers';

import HeaderContainer from './HeaderContainer';
import LevelsContainer from './LevelsContainer';
import AttributesContainer from './AttributesContainer';
import SkillsContainer from './SkillsContainer';
import ProficienciesContainer from './ProficienciesContainer';
import StatsContainer from './StatsContainer';
import CharContainer from './CharContainer';
import AtacksContainer from './AtacksContainer';
import ItemsContainer from './ItemsContainer';

import AttributesData from '../data/attributes.json';
import ProficienciesData from '../data/proficiencies.json';

class Sheet extends Component {
  constructor(props){
    super(props);
    this.state = {
      level: 5,
      proficiency_bonus: helpers.proficiencyBonusFromLevel(5),
      attributes_modifiers: {
        str: helpers.modifierFromAttribute(AttributesData.str),
        dex: helpers.modifierFromAttribute(AttributesData.dex),
        con: helpers.modifierFromAttribute(AttributesData.con),
        int: helpers.modifierFromAttribute(AttributesData.int),
        wis: helpers.modifierFromAttribute(AttributesData.wis),
        cha: helpers.modifierFromAttribute(AttributesData.cha),
      }
    }
  };
  render() {
    return (
      <div className="sheet">
        <HeaderContainer />
        <LevelsContainer value={this.state.level}/>
        <AttributesContainer
          attributes={AttributesData}
          modifiers={this.state.attributes_modifiers}/>
        <SkillsContainer
          proficiencies={ProficienciesData}
          bonus={this.state.proficiency_bonus}
          modifiers={this.state.attributes_modifiers}/>
        <ProficienciesContainer />
        <StatsContainer />
        <CharContainer />
        <AtacksContainer />
        <ItemsContainer />
      </div>
    );
  }
}

export default Sheet;
