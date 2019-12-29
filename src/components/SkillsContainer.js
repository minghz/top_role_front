import React, { Component } from 'react';
import { refreshProfObj, mapOfSkillAttribute } from '../services/helpers'
import { skillProfsFromBackground, skillChoicesFromClass } from '../services/dataParsers'

import Skill from './Skill';
import '../css/SkillsContainer.css'

class SkillsContainer extends Component {
  constructor(props) {
    super(props)

    const backgroundSkills = skillProfsFromBackground(props.background)
    this.state = {
      chosen: 0,
      proficiencies: refreshProfObj(backgroundSkills)
    }

    this.handleSetProficient = this.handleSetProficient.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.background !== prevProps.background ||
       this.props.class !== prevProps.class) {

      const backgroundSkills = skillProfsFromBackground(this.props.background)
      this.setState({
        chosen: 0,
        proficiencies: refreshProfObj(backgroundSkills)
      })
    }
  }
  
  skillIsFromBackground(skill) {
    return skillProfsFromBackground(this.props.background).includes(skill)
  }

  skillIsChoosable(skill) {
    return skillChoicesFromClass(this.props.class).from.includes(skill)
  }

  skillIsLocked(skill){
    if(this.skillIsFromBackground(skill)) return true
    if(!this.skillIsChoosable(skill)) return true

    return false
  }

  handleSetProficient(skill, toggle){
    let chooseMax = skillChoicesFromClass(this.props.class).count
    if(toggle && this.state.chosen >= chooseMax) return

    let newProficiencies = this.state.proficiencies
    let newChosen = this.state.chosen

    newProficiencies[skill] = toggle
    toggle ? ++newChosen : --newChosen

    this.setState({
      chosen: newChosen,
      proficiencies: newProficiencies
    })
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
              <Skill key={skill} skill={skill}
                modifier={this.props.modifiers[attribute]}
                bonus={this.props.bonus}
                proficient={this.state.proficiencies[skill]}
                locked={this.skillIsLocked(skill)}
                onSetProficient={this.handleSetProficient}/>
            )
          })
        }
      </div>
    )
  }
}

export default SkillsContainer;
