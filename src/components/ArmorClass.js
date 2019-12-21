import React, { Component } from 'react';
import '../css/ArmorClass.css';

class ArmorClass extends Component {
  render() {
    return(
      <div className="armor-class">
        <strong>Armor Class</strong>
        <div className="armor-class-value">
          {10 + this.props.dexMod}
        </div>
      </div>
    )
  }
}

export default ArmorClass;
