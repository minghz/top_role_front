import React, { Component } from 'react';
import '../css/Skill.css'

function calculateTotalMod(proficient, bonus, modifier) {
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
      name: props.name,
      proficient: props.proficient,
      total: calculateTotalMod(props.proficient, props.bonus, props.modifier)
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.modifier !== prevProps.modifier){
      this.setState({
        modifier: this.props.modifier,
        total: calculateTotalMod(this.props.proficient, this.props.bonus, this.props.modifier)
      });
    }
  }

  changeTotal(){
    if(this.state.proficient)
      this.setState({
        proficient: false,
        total: calculateTotalMod(false, this.props.bonus, this.props.modifier)
      });
    else
      this.setState({
        proficient: true,
        total: calculateTotalMod(true, this.props.bonus, this.props.modifier)
      });
  }

  render() {
    return(
      <div className="skill">
        <div className="skill-proficiency" onClick={() => this.changeTotal()}>
          {markProficiency(this.state.proficient)}
        </div>
        <div className="skill-name">{this.state.name}</div>
        <div className="skill-total">+{this.state.total}</div>
      </div>
    )
  }
}

export default Skill;
