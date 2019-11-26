import React, { Component } from 'react';

class ArmorClass extends Component {
  render() {
    return(
      <div className="armor-class">
        AC: {10 + this.props.dexMod}
      </div>
    )
  }
}

export default ArmorClass;
