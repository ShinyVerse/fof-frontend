{this.state.badges.map(img => {
  return <img src= {img} alt="any" />
}) }

            <CheckerButton handleCheck={handleCheck} />
              padding-left: 12px;
              padding-right: 10px;
              position: absolute;
              left: 82%;
              width: 65px;
              background: grey;
              height: 40px;
              margin-top: -1px;
              border-radius: 10px 0px 0px 10px;


App prev:
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




/* ,
{
  "id": "1b",
  "challenge":"Go into the sea.",
  "success": false
},
{
  "id": "1c",
  "challenge":"Learn to dive.",
  "success": false
} */
