import React, { Component } from 'react';
import '../css/Sheet.css';
import * as helpers from '../services/helpers';
import * as hpCalculator from '../services/hpCalculator';
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

import RacesData from '../data/races.json';
import ClassesData from '../data/classes.json';
import BackgroundsData from '../data/backgrounds-full.json';

class Sheet extends Component {
  constructor(props){
    super(props);

    var level = 5
    var charClass = "Barbarian"
    var charRace = "Dragonborn"
    var charBackground = "Sailor"

    var attributesBase = {
      str: 12,
      dex: 14,
      con: 12,
      int: 14,
      wis: 12,
      cha: 15
    }
    var attributeModifiers = helpers.modifiers(attributesBase, dataParsers.racialAttributes("Dragonborn"))
    var hpMax = hpCalculator.averageHp(level, attributeModifiers.con, dataParsers.hitDiceNumberFromClass('Barbarian'))
    var proficiencyBonus = helpers.proficiencyBonusFromLevel(level)
    var savingProficiencies = dataParsers.savingProficienciesFromClass(charClass)
    var attributesRacial = dataParsers.racialAttributes(charRace)

    this.state = {
      charName: "Tracx Lury",
      race: charRace,
      class: charClass,
      background: charBackground,
      level: level,
      hpCurrent: 6,
      hpMax: hpMax,
      proficiencyBonus: proficiencyBonus,
      savingProficiencies: savingProficiencies,
      attributes: attributesBase,
      attributes_racial: attributesRacial,
      attributeModifiers: attributeModifiers
    }
  };

  handleLevelChange = (newLevel) => {
    var newProfBonus = helpers.proficiencyBonusFromLevel(newLevel)
    var newHpMax = hpCalculator.averageHp(
      newLevel,
      this.state.attributeModifiers.con,
      dataParsers.hitDiceNumberFromClass(this.state.class)
    )

    this.setState({
      level: newLevel,
      proficiencyBonus: newProfBonus,
      hpMax: newHpMax
    })
  }

  handleAttributeChange = (type, value) => {
    if(type === 'con') {
      var newHpMax = hpCalculator.averageHp(
        this.state.level,
        helpers.modifierFromAttribute(value + this.state.attributes_racial.con),
        dataParsers.hitDiceNumberFromClass(this.state.class)
      );

      this.setState({hpMax: newHpMax});
    }

    var new_attributes = this.state.attributes
    var changed_attribute = {}
    changed_attribute[type] = value
    new_attributes = Object.assign(new_attributes, changed_attribute)
    this.setState({attributes: new_attributes})
  }

  handleModifierChange = (type, value) => {
    var new_modifiers = this.state.attributeModifiers
    var changed_modifier = {}
    changed_modifier[type] = value
    new_modifiers = Object.assign(new_modifiers, changed_modifier)
    this.setState({attributeModifiers: new_modifiers})
  }

  handleClassChange = (className) => {
    var newSavingProficiencies = dataParsers.savingProficienciesFromClass(className)
    var newHpMax = hpCalculator.averageHp(
      this.state.level,
      this.state.attributeModifiers.con,
      dataParsers.hitDiceNumberFromClass(className)
    )

    this.setState({
      class: className,
      savingProficiencies: newSavingProficiencies,
      hpMax: newHpMax
    })
    //TODO Choose two skills from list
  }

  handleRaceChange = (raceName) => {
    var racial_attrs = dataParsers.racialAttributes(raceName)
    this.setState({
      attributeModifiers: helpers.modifiers(this.state.attributes, racial_attrs),
      attributes_racial: racial_attrs,
      race: raceName,
    });
  }

  handleBackgroundChange = (backgroundName) => {
    this.setState({
      background: backgroundName
    });
  }

  handleNameChange = (charName) => {
    this.setState({charName: charName});
  }

  handleHpChange = (newHp) => {
    this.setState({hpCurrent: newHp});
  }

  render() {
    return (
      <div className="sheet">
        <div className="header-container">
          <CharName
            value={this.state.charName}
            onNameChange={this.handleNameChange} />
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
           modifiers={this.state.attributeModifiers}
           onModifierChange={this.handleModifierChange}/>
         <SavingThrowsContainer
           modifiers={this.state.attributeModifiers}
           bonus={this.state.proficiencyBonus}
           savingProficiencies={this.state.savingProficiencies} />
         <SkillsContainer
           background={this.state.background}
           class={this.state.class}
           bonus={this.state.proficiencyBonus}
           modifiers={this.state.attributeModifiers}/>
         <StatsContainer
           dexMod={this.state.attributeModifiers.dex}
           max={this.state.hpMax}
           current={this.state.hpCurrent}
           onHpChange={this.handleHpChange}/>
         <ProficienciesContainer class={this.state.class} background={this.state.background}/>
         <AtacksContainer />
         <CharContainer background={this.state.background}/>
         <ItemsContainer background={this.state.background} />
      </div>
    );
  }
}

export default Sheet;
