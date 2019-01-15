import React, { Component } from 'react';
import IndividualChallenge from '../IndividualChallenge/IndividualChallenge'

class BadgeChallenges extends Component {
  constructor(props) {
    super(props);

    this.state = {...props.challenges}
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
            challenge={challenge.challenge}
            success={challenge.success}
          />
        )
      ))
    }
    return (
      <div data-test='component-challenges'>
        <ul>
          {contents}
        </ul>
      </div>
    );
  }
}

export default BadgeChallenges;
