import React, { Component } from 'react';
import '../../css/CharName.css';

class CharName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onNameChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render(){
    return(
      <div className="char-name">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default CharName;
