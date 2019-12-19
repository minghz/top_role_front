import React, { Component } from 'react';
import Skill from './Skill';
import '../css/SkillsContainer.css'

class SkillsContainer extends Component {
  render() {
    return(
      <div className="skills-container">
        <strong>Skills</strong>

        <Skill modifier={this.props.modifiers.str} proficient={this.props.proficiencies.ath} bonus={this.props.bonus} name="Athletics" />

        <Skill modifier={this.props.modifiers.dex} proficient={this.props.proficiencies.acr} bonus={this.props.bonus} name="Acrobatics"      />
        <Skill modifier={this.props.modifiers.dex} proficient={this.props.proficiencies.soh} bonus={this.props.bonus} name="Sleight of Hand" />
        <Skill modifier={this.props.modifiers.dex} proficient={this.props.proficiencies.ste} bonus={this.props.bonus} name="Stealth"         />

        <Skill modifier={this.props.modifiers.int} proficient={this.props.proficiencies.arc} bonus={this.props.bonus} name="Arcana"          />
        <Skill modifier={this.props.modifiers.int} proficient={this.props.proficiencies.his} bonus={this.props.bonus} name="History"         />
        <Skill modifier={this.props.modifiers.int} proficient={this.props.proficiencies.inv} bonus={this.props.bonus} name="Investigation"   />
        <Skill modifier={this.props.modifiers.int} proficient={this.props.proficiencies.nat} bonus={this.props.bonus} name="Nature"          />
        <Skill modifier={this.props.modifiers.int} proficient={this.props.proficiencies.rel} bonus={this.props.bonus} name="Religion"        />

        <Skill modifier={this.props.modifiers.wis} proficient={this.props.proficiencies.anh} bonus={this.props.bonus} name="Animal Handling" />
        <Skill modifier={this.props.modifiers.wis} proficient={this.props.proficiencies.ins} bonus={this.props.bonus} name="Insight"         />
        <Skill modifier={this.props.modifiers.wis} proficient={this.props.proficiencies.med} bonus={this.props.bonus} name="Medicine"        />
        <Skill modifier={this.props.modifiers.wis} proficient={this.props.proficiencies.per} bonus={this.props.bonus} name="Perception"      />
        <Skill modifier={this.props.modifiers.wis} proficient={this.props.proficiencies.sur} bonus={this.props.bonus} name="Survival"        />

        <Skill modifier={this.props.modifiers.cha} proficient={this.props.proficiencies.dec} bonus={this.props.bonus} name="Deception"       />
        <Skill modifier={this.props.modifiers.cha} proficient={this.props.proficiencies.int} bonus={this.props.bonus} name="Intimidation"    />
        <Skill modifier={this.props.modifiers.cha} proficient={this.props.proficiencies.prf} bonus={this.props.bonus} name="Performance"     />
        <Skill modifier={this.props.modifiers.cha} proficient={this.props.proficiencies.prs} bonus={this.props.bonus} name="Persuasion"      />
      </div>
    )
  }
}

export default SkillsContainer;
