import React, { Component } from 'react';
import Select from 'react-select'
import { listNames } from '../../services/helpers.js'
import ClassesData from '../../data/classes.json'

function selectableClasses() {
  let classes = listNames(ClassesData)
  let selectable = classes.map(charClass => {
    return { value: charClass, label: charClass }
  })
  return selectable
}

class CharClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { value: props.value, label: props.value }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedObj) {
    this.setState({value: selectedObj});
    this.props.onClassChange(selectedObj.value);
  }

  render(){
    return(
      <div className="char-class">
        <strong>Class</strong>
        <Select
          value={this.state.value}
          options={selectableClasses()}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default CharClass;
