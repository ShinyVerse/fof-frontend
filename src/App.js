import React, { Component } from 'react';
import BadgeList from './components/BadgeList/BadgeList';
import BadgeJson from './assets/badge.json';
//svgs
import seaSvg from './assets/svg/sea.svg';
import speakSvg from './assets/svg/speak.svg';
import socialSvg from './assets/svg/social.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { badges: [speakSvg, seaSvg, socialSvg]}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BadgeList badges={this.state.badges} badgeInfo={BadgeJson}/>
        </header>
      </div>
    );
  }
}

export default App;
