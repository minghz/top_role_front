import React, { Component } from 'react';
import '../css/Sheet.css';
import * as helpers from '../services/helpers';
import * as dataParsers from '../services/dataParsers';

import '../css/HeaderContainer.css';
import CharName from './header_container/CharName';
import CharClass from './header_container/CharClass';
import CharRace from './header_container/CharRace';
import CharBackground from './header_container/CharBackground';

import LevelsContainer from './LevelsContainer';
import AttributesContainer from './AttributesContainer';
import SkillsContainer from './SkillsContainer';
import SavingThrowsContainer from './SavingThrowsContainer';

import ProficienciesContainer from './ProficienciesContainer';
import StatsContainer from './StatsContainer';
import CharContainer from './CharContainer';
import AtacksContainer from './AtacksContainer';
import ItemsContainer from './ItemsContainer';

import AttributesData from '../data/attributes.json';
import ProficienciesData from '../data/proficiencies.json';
import RacesData from '../data/races.json';
import ClassesData from '../data/classes.json';
import BackgroundsData from '../data/backgrounds.json';
import HealthPointsData from '../data/health.json';

class Sheet extends Component {
  constructor(props){
    super(props);
    this.state = {
      charName: "Tracx Lury",
      race: "Dragonborn",
      class: "Barbarian",
      background: "Sailor",
      background_paragraphs: dataParsers.backgroundParagraphs("Sailor"),
      level: 5,
      proficiencyBonus: helpers.proficiencyBonusFromLevel(5),
      savingProficiencies: dataParsers.savingProficienciesFromClass("Barbarian"),
      attributes: AttributesData,
      attributes_racial: dataParsers.racialAttributes("Dragonborn"),
      attributes_modifiers: helpers.modifiers(AttributesData, dataParsers.racialAttributes("Dragonborn"))
    }
  };

  handleLevelChange = (newLevel) => {
    this.setState({
      level: newLevel,
      proficiencyBonus: helpers.proficiencyBonusFromLevel(newLevel),
    })
  }

  handleAttributeChange = (type, value) => {
    var new_attributes = this.state.attributes
    var changed_attribute = {}
    changed_attribute[type] = value
    new_attributes = Object.assign(new_attributes, changed_attribute)
    this.setState({attributes: new_attributes})
  }

  handleModifierChange = (type, value) => {
    var new_modifiers = this.state.attributes_modifiers
    var changed_modifier = {}
    changed_modifier[type] = value
    new_modifiers = Object.assign(new_modifiers, changed_modifier)
    this.setState({attributes_modifiers: new_modifiers})
  }

  handleClassChange = (className) => {
    var newSavingProficiencies = dataParsers.savingProficienciesFromClass(className)
    this.setState({
      savingProficiencies: newSavingProficiencies
    })
    //TODO Choose two skills from list
    //TODO armor/weapon/instrument/tools
    //TODO HitDice change
  }

  handleRaceChange = (raceName) => {
    var racial_attrs = dataParsers.racialAttributes(raceName)
    this.setState({
      attributes_modifiers: helpers.modifiers(AttributesData, racial_attrs),
      attributes_racial: racial_attrs,
      race: raceName,
    });
  }

  handleBackgroundChange = (backgroundName) => {
    this.setState({
      background: backgroundName,
      background_paragraphs: dataParsers.backgroundParagraphs(backgroundName)
    });
  }

  handleNameChange = (charName) => {
    this.setState({charName: charName});
  }

  render() {
    return (
      <div className="sheet">
        <div className="header-container">
          <CharName
            value={this.state.charName}
            onNameChange={this.handleNameChange}/>
          <CharClass
            value={this.state.class}
            classes={helpers.listNames(ClassesData)}
            onClassChange={this.handleClassChange}/>
          <CharRace
            value={this.state.race}
            races={helpers.listNames(RacesData)}
            onRaceChange={this.handleRaceChange} />
          <CharBackground
            value={this.state.background}
            backgrounds={helpers.listNames(BackgroundsData)}
            onBackgroundChange={this.handleBackgroundChange} />
        </div>
        <LevelsContainer
          value={this.state.level}
          proficiencyBonus={this.state.proficiencyBonus}
          onLevelChange={this.handleLevelChange}/>
        <AttributesContainer
          attributes={this.state.attributes}
          onAttributeChange={this.handleAttributeChange}
          attributes_racial={this.state.attributes_racial}
          modifiers={this.state.attributes_modifiers}
          onModifierChange={this.handleModifierChange}/>
        <SavingThrowsContainer
          modifiers={this.state.attributes_modifiers}
          bonus={this.state.proficiencyBonus}
          savingProficiencies={this.state.savingProficiencies} />
        <SkillsContainer
          proficiencies={ProficienciesData}
          bonus={this.state.proficiencyBonus}
          modifiers={this.state.attributes_modifiers}/>
        <ProficienciesContainer />
        <StatsContainer
          dexMod={this.state.attributes_modifiers.dex}
          max={HealthPointsData.max}
          current={HealthPointsData.current}
          tmp={HealthPointsData.tmp}/>
        <CharContainer paragraphs={this.state.background_paragraphs}/>
        <AtacksContainer />
        <ItemsContainer />
      </div>
    );
  }
}

export default Sheet;
