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
      attributes: AttributesData,
      attributes_racial: helpers.racialAttributes("Dragonborn"),
      attributes_modifiers: helpers.modifiers(AttributesData, helpers.racialAttributes("Dragonborn"))
    }
  };
  handleRaceChange = (raceName) => {
    var racial_attrs = helpers.racialAttributes(raceName)
    this.setState({
      attributes_modifiers: helpers.modifiers(AttributesData, racial_attrs),
      attributes_racial: racial_attrs,
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
          attributes_racial={this.state.attributes_racial}
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