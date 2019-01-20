import React, { Component } from 'react';
import IndividualChallenge from '../IndividualChallenge/IndividualChallenge'

class BadgeChallenges extends Component {
  constructor(props) {
    super(props);

    this.state = {...props.challenges, allComplete: false }
  }

  checkClicker = (badgeID) => {
    var updatedChallenges = this.state.challenges.filter((challenge) =>
    { if (challenge.id === badgeID) {
      challenge.success = true
      }
      return challenge;
    })
    this.setState({
      challenges: updatedChallenges
    });
    this.allCompleteChecker();
  }

  allCompleteChecker = () => {
    let numberOfSuccessfulChallenges = this.state.challenges.filter(challenge => {
       if (challenge.success === true) {
         return challenge
       } else {
         return null;
       }
    });
    if (numberOfSuccessfulChallenges.length === 3) {
      this.updateComplete();
    }
  }

  updateComplete = () => {
    this.setState({
      allComplete: true
    });
    // this.state.allComplete = true;
  }

  componentDidMount() {
    this.allCompleteChecker();
  }

  render() {
    let contents;
    if (this.state.challenges === 0) {
      contents = (
        <div />
      )
    } else {
      contents = (
        this.state.challenges.map(challenge => (
          <IndividualChallenge
            data-test='challenge-item'
            key={challenge.id}
            id={challenge.id}
            challenge={challenge.challenge}
            success={challenge.success}
            handleClick={this.checkClicker.bind(this)}
          />
        )
      ))
    }
    let allComplete = this.state.allComplete ? 'all-complete' : ""
    return (
      <div data-test='component-challenges'>
        <ul     className='badgeContainer'>
          <div data-test='badge-overlay' className={allComplete}>
            {contents}
          </div>
        </ul>
      </div>
    );
  }
}

export default BadgeChallenges;
