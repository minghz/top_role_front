import React, { Component } from 'react';

class CharClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      classes: props.classes
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onClassChange(event.target.value);
  }

  render(){
    return(
      <div className="char-class">
        <strong>Class</strong>
        <select value={this.state.value} onChange={this.handleChange} >
          { this.state.classes.map((value, index) => {
              return <option key={index} value={value}>{value}</option>
          })}
        </select>
      </div>
    );
  }
}

export default CharClass;
