import React, { Component } from 'react';
import { equipmentFromBackground } from '../services/dataParsers'
import '../css/ItemsContainer.css';

class ItemsContainer extends Component {
  render() {
    return(
      <div className="items-container">
        <strong>Items</strong>
        <p>{equipmentFromBackground(this.props.background)}</p>
      </div>
    )
  }
}

export default ItemsContainer;
