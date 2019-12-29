import React, { Component } from 'react';
import { totalSkillBonus } from '../services/helpers'
import { humanizeCamelCase } from '../services/formatters'
import '../css/Skill.css'

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: totalSkillBonus(props.proficient, props.bonus, props.modifier)
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.modifier !== prevProps.modifier){
      this.setState({
        total: totalSkillBonus(this.props.proficient, this.props.bonus, this.props.modifier)
      });
    }

    if(this.props.bonus !== prevProps.bonus){
      this.setState({
        total: totalSkillBonus(this.props.proficient, this.props.bonus, this.props.modifier)
      });
    }

    if(this.props.proficient !== prevProps.proficient){
      this.setState({
        total: totalSkillBonus(this.props.proficient, this.props.bonus, this.props.modifier)
      });
    }
  }

  toggleProficiency(){
    if(this.props.proficient) {
      this.props.onSetProficient(this.props.skill, false);
    } else {
      this.props.onSetProficient(this.props.skill, true);
    }
  }

  render() {
    let checkbox;

    if(this.props.locked){
      checkbox = <div className="skill-proficiency locked-checkbox">
        {this.props.proficient ? 'X' : ''}
      </div>
    } else {
      checkbox = <div className="skill-proficiency" onClick={() => this.toggleProficiency()}>
        {this.props.proficient ? 'X' : ''}
      </div>
    }

    return(
      <div className="skill">
        {checkbox}
        <div className="skill-name">{humanizeCamelCase(this.props.skill)}</div>
        <div className="skill-total">+{this.state.total}</div>
      </div>
    )
  }
}

export default Skill;
