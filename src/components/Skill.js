import React, { Component } from 'react';
import '../css/Skill.css'

function totalSkillBonus(proficient, bonus, modifier) {
  if(proficient){
    return bonus + modifier;
  } else {
    return modifier;
  }
}

function markProficiency(proficient) {
  if(proficient)
    return 'X';
  else
    return '';
}

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proficient: props.proficient,
      total: totalSkillBonus(props.proficient, props.bonus, props.modifier)
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.modifier !== prevProps.modifier){
      this.setState({
        total: totalSkillBonus(this.state.proficient, this.props.bonus, this.props.modifier)
      });
    }

    if(this.props.bonus !== prevProps.bonus){
      this.setState({
        total: totalSkillBonus(this.state.proficient, this.props.bonus, this.props.modifier)
      });
    }

    if(this.props.proficient !== prevProps.proficient){
      this.setState({
        proficient: this.props.proficient,
        total: totalSkillBonus(this.props.proficient, this.props.bonus, this.props.modifier)
      });
    }
  }

  changeTotal(){
    if(this.state.proficient)
      this.setState({
        proficient: false,
        total: totalSkillBonus(false, this.props.bonus, this.props.modifier)
      });
    else
      this.setState({
        proficient: true,
        total: totalSkillBonus(true, this.props.bonus, this.props.modifier)
      });
  }

  render() {
    let checkbox;
    const checkboxIsLocked = this.props.locked

    if(checkboxIsLocked){
      checkbox = <div className="skill-proficiency locked-checkbox">
                   {markProficiency(this.state.proficient)}
                 </div>
    } else {
      checkbox = <div className="skill-proficiency" onClick={() => this.changeTotal()}>
                   {markProficiency(this.state.proficient)}
                 </div>
    }

    return(
      <div className="skill">
        {checkbox}
        <div className="skill-name">{this.props.name}</div>
        <div className="skill-total">+{this.state.total}</div>
      </div>
    )
  }
}

export default Skill;
