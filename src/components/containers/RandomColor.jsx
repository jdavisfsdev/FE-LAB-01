import React, { Component } from 'react';
import ColorDisplay from '../ColorDisplay';

export default class RandomColor extends Component {
    state = {
      randomColor: 'red'
    }

    render() {
      return (
        <>
          <ColorDisplay color={this.state.randomColor}/>
        </>
      );
    }
}
