import React, { Component } from 'react';
import * as dataParsers from '../services/dataParsers'
import * as formatters from '../services/formatters'
import Skill from './Skill';
import '../css/SkillsContainer.css'

class SkillsContainer extends Component {
  // TODO allow choose from list depending on class

  constructor(props) {
    super(props)
    this.state = {
      backgroundProfs: dataParsers.skillProfsFromBackground(props.background),
      skillsAndAttributes: {
        athletics:      'str',
        acrobatics:     'dex',
        sleightOfHand:  'dex',
        stealth:        'dex',
        arcana:         'int',
        history:        'int',
        investigation:  'int',
        nature:         'int',
        religion:       'int',
        animalHandling: 'wis',
        insight:        'wis',
        medicine:       'wis',
        perception:     'wis',
        survival:       'wis',
        deception:      'cha',
        intimidation:   'cha',
        performance:    'cha',
        persuasion:     'cha'
      }
    }
  }

  render() {
    return(
      <div className="skills-container">
        <strong>Skills</strong>
        {
          Object.entries(this.state.skillsAndAttributes).map((entry) => {
            const skill = entry[0]
            const attribute = entry[1]
            const isFromBackground = this.state.backgroundProfs.includes(skill)

            return(
              <Skill key={skill} name={formatters.humanizeCamelCase(skill)}
                modifier={this.props.modifiers[attribute]}
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
