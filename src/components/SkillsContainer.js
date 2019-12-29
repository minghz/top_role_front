import React, { Component } from 'react';
import { mapOfSkillAttribute } from '../services/helpers'
import { skillProfsFromBackground, skillChoicesFromClass } from '../services/dataParsers'
import { humanizeCamelCase, camelize } from '../services/formatters'

import Skill from './Skill';
import '../css/SkillsContainer.css'

class SkillsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { chosen: 0 }

    this.handleSetProficient = this.handleSetProficient.bind(this);
  }

  // TODO don't allow change if chosen reached max
  skillIsFromBackground(skill) {
    const background = this.props.background
    const skillsFromBackground = skillProfsFromBackground(background).map((bgSkill) => {
      return camelize(bgSkill)
    })

    return skillsFromBackground.includes(skill)
  }

  skillIsChoosable(skill) {
    let chooseChoices = skillChoicesFromClass(this.props.class).from
    let camelizedChoiceList = chooseChoices.map((choice) => {
      return camelize(choice)
    });

    return camelizedChoiceList.includes(skill)
  }

  skillIsLocked(skill){
    if(this.skillIsFromBackground(skill)) return true
    if(!this.skillIsChoosable(skill)) return true

    return false
  }

  skillIsProficient(skill){
    if(this.skillIsFromBackground(skill)) return true

    return false
  }

  handleSetProficient(toggle){
    if(toggle) {
      this.setState({ chosen: this.state.chosen + 1 });
    } else {
      this.setState({ chosen: this.state.chosen - 1 });
    }
  }

  render() {
    let chooseMax = skillChoicesFromClass(this.props.class).count

    return(
      <div className="skills-container">
        <strong>Skills (chosen {this.state.chosen}/{chooseMax})</strong>
        {
          Object.entries(mapOfSkillAttribute()).map((entry) => {
            const skill = entry[0]
            const attribute = entry[1]

            return(
              <Skill key={skill} name={humanizeCamelCase(skill)}
                modifier={this.props.modifiers[attribute]}
                proficient={this.skillIsProficient(skill)}
                locked={this.skillIsLocked(skill)}
                bonus={this.props.bonus}
                onSetProficient={this.handleSetProficient}/>
            )
          })
        }
      </div>
    )
  }
}

export default SkillsContainer;
