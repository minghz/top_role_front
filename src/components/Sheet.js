import React, { Component } from 'react';
import '../css/Sheet.css';
import * as helpers from '../services/helpers';

import '../css/HeaderContainer.css';
import CharName from './header_container/CharName';
import CharRace from './header_container/CharRace';
import CharBackground from './header_container/CharBackground';

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
import RacesData from '../data/races.json';

class Sheet extends Component {
  constructor(props){
    super(props);
    this.state = {
      char_name: "Tracx Lury",
      race: "Dragonborn",
      level: 5,
      proficiency_bonus: helpers.proficiencyBonusFromLevel(5),
      attributes: {
        str: AttributesData.str,
        dex: AttributesData.dex,
        con: AttributesData.con,
        int: AttributesData.int,
        wis: AttributesData.wis,
        cha: AttributesData.cha,
      },
      attributes_modifiers: {
        str: helpers.modifierFromAttribute(AttributesData.str),
        dex: helpers.modifierFromAttribute(AttributesData.dex),
        con: helpers.modifierFromAttribute(AttributesData.con),
        int: helpers.modifierFromAttribute(AttributesData.int),
        wis: helpers.modifierFromAttribute(AttributesData.wis),
        cha: helpers.modifierFromAttribute(AttributesData.cha),
      },
      attributes_racial: helpers.racialAttributes("Dragonborn")
    }

    this.handleRaceChange = this.handleRaceChange.bind(this);
  };

  handleRaceChange(raceName) {
    this.setState({
      attributes_racial: helpers.racialAttributes(raceName),
      race: raceName,
    });
  }

  render() {
    return (
      <div className="sheet">
        <div className="header-container">
          <CharName value={this.state.char_name} />
          <CharRace
            value={this.state.race}
            races={helpers.listNames(RacesData)}
            onRaceChange={this.handleRaceChange} />
          <CharBackground value="Far Traveler"/>
        </div>
        <LevelsContainer value={this.state.level}/>
        <AttributesContainer
          attributes={this.state.attributes}
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
