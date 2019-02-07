import React, { Component } from 'react';
import './App.css';
import RandomCard  from './components/random-card';
import Button from './components/button';

class App extends Component {
  
  render() {
    if (Button.state.start === false) {
      return (
        <Button />
      );
    } else {
      return (
            <RandomCard />
      )
    }
    
  }
}

export default App;
