import React, { Component } from 'react';
import '../../css/CharName.css';

class CharName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onNameChange(event.target.value);
  }

  render(){
    return(
      <div className="char-name">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default CharName;
