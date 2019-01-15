import React, { Component } from 'react';
import challengeJson from './assets/challenges.json';
import BadgeChallenges from './components/BadgeChallenges/BadgeChallenges';


import './App.css';
class App extends Component {
  constructor(props) {
    super();

  }
  render() {
    const challengesOfOneBadge = challengeJson[0]

    return (
      <div className="App">
        <BadgeChallenges
          challenges={challengesOfOneBadge}
           />
      </div>
    );
  }
}

export default App;
