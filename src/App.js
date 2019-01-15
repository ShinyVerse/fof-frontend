import React, { Component } from 'react';
import challengeJson from './assets/challenges.json';
import IndividualChallenge from './components/IndividualChallenge/IndividualChallenge';
//svgs

import './App.css';
class App extends Component {
  constructor(props) {
    super();

  }
  render() {
    return (
      <div className="App">
        <IndividualChallenge
          id='1a'
          challenge='Get swimming'
          success={false} />
      </div>
    );
  }
}

export default App;
