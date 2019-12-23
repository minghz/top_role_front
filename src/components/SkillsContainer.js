import React, { Component } from 'react';
import { attributeOfSkill, mapOfSkillAttribute } from '../services/helpers'
import { skillProfsFromBackground } from '../services/dataParsers'
import { humanizeCamelCase } from '../services/formatters'

import Skill from './Skill';
import '../css/SkillsContainer.css'

class SkillsContainer extends Component {
  // TODO allow choose from list depending on class

  constructor(props) {
    super(props)
  }

  skillIsFromBackground(skill) {
    const background = this.props.background
    const skillsFromBackground = skillProfsFromBackground(background)

    return skillsFromBackground.includes(skill)
  }
  
  render() {
    return(
      <div className="skills-container">
        <strong>Skills</strong>
        {
          Object.entries(mapOfSkillAttribute()).map((entry) => {
            const skill = entry[0]
            const attribute = entry[1]
            const isFromBackground = this.skillIsFromBackground(skill)

            return(
              <Skill key={skill} name={humanizeCamelCase(skill)}
                modifier={this.props.modifiers[attributeOfSkill(skill)]}
                proficient={isFromBackground}
                locked={isFromBackground}
                bonus={this.props.bonus}/>
            )
          })
        }
      </div>
    )
  }
}

export default SkillsContainer;
