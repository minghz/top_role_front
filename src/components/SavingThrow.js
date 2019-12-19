import React, { Component } from 'react';
import '../css/SavingThrow.css'
import * as helpers from '../services/helpers';


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

class SavingThrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: helpers.attributeNameFromType(this.props.type),
      bonus: props.bonus,
      proficient: props.proficient,
      modifier: props.modifier,
      total: calculateTotalMod(props.proficient, props.bonus, props.modifier)
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.modifier !== prevProps.modifier) {
      this.setState({
        modifier: this.props.modifier,
        total: calculateTotalMod(this.state.proficient, this.state.bonus, this.props.modifier)
      });
    }

    if(this.props.proficient !== prevProps.proficient) {
      this.setState({
        proficient: this.props.proficient,
        total: calculateTotalMod(this.props.proficient, this.state.bonus, this.state.modifier)
      });
    }

    if(this.props.bonus !== prevProps.bonus) {
      this.setState({
        bonus: this.props.bonus,
        total: calculateTotalMod(this.state.proficient, this.props.bonus, this.state.modifier)
      });
    }
  }

  changeTotal(){
    if(this.state.proficient)
      this.setState({
        proficient: false,
        total: calculateTotalMod(false, this.state.bonus, this.state.modifier)
      });
    else
      this.setState({
        proficient: true,
        total: calculateTotalMod(true, this.state.bonus, this.state.modifier)
      });
  }

  render() {
    return(
      <div className="saving-throw">
        <div className="saving-throw-proficiency">
          {markProficiency(this.state.proficient)}
        </div>
        <div className="saving-throw-attribute-name">{this.state.name}</div>
        <div className="saving-throw-total">+{this.state.total}</div>
      </div>
    )
  }
}

export default SavingThrow;
