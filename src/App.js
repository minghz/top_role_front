import React from 'react';
import logo from './logo.svg';
import './App.css';
import LevelsContainer from './components/LevelsContainer';
import AttributesContainer from './components/AttributesContainer';
import SkillsContainer from './components/SkillsContainer';
import AttributesData from './data/attributes.json';
import ProficienciesData from './data/proficiencies.json';
import * as helpers from './services/helpers';

class App extends React.Component {
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
      <div className="App">
        <LevelsContainer value={this.state.level}/>
        <AttributesContainer
          attributes={AttributesData}
          modifiers={this.state.attributes_modifiers}/>
        <SkillsContainer
          proficiencies={ProficienciesData}
          bonus={this.state.proficiency_bonus}
          modifiers={this.state.attributes_modifiers}/>
      </div>
    );
  }
}

export default App;
