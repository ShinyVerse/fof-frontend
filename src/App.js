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
        <IndividualChallenge challenge='Get swimming'
          success={true} />
      </div>
    );
  }
}

export default App;
