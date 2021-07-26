import React, { Component } from 'react';
import ColorDisplay from '../ColorDisplay';

export default class RandomColor extends Component {
    state = {
      randomColor: 'cyan'
    }

    render() {
      return (
        <>
          <ColorDisplay backgroundColor={this.state.randomColor}/>
          <h1>{this.state.randomColor}</h1>
        </>
      );
    }
}
