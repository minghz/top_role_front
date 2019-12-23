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
      bonus: props.bonus,
      locked: props.locked,
      proficient: props.proficient,
      modifier: props.modifier,
      total: totalSkillBonus(props.proficient, props.bonus, props.modifier)
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.modifier !== prevProps.modifier){
      this.setState({
        modifier: this.props.modifier,
        total: totalSkillBonus(this.state.proficient, this.state.bonus, this.props.modifier)
      });
    }

    if(this.props.bonus !== prevProps.bonus){
      this.setState({
        bonus: this.props.bonus,
        total: totalSkillBonus(this.state.proficient, this.props.bonus, this.state.modifier)
      });
    }

    if(this.props.locked !== prevProps.locked){
      this.setState({
        locked: this.props.locked,
        proficient: this.props.proficient,
        total: totalSkillBonus(this.props.proficient, this.state.bonus, this.state.modifier)
      });
    }
  }

  changeTotal(){
    if(this.state.proficient)
      this.setState({
        proficient: false,
        total: totalSkillBonus(false, this.state.bonus, this.state.modifier)
      });
    else
      this.setState({
        proficient: true,
        total: totalSkillBonus(true, this.state.bonus, this.state.modifier)
      });
  }

  render() {
    let checkbox;
    const checkboxIsLocked = this.state.locked

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
