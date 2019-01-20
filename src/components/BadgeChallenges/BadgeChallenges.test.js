import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import BadgeChallenges from './BadgeChallenges';

import { findByTestAttr } from '../../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultState = {
  challenges: [
    {
       "id": "1a",
       "challenge":"Task1",
       "success": false
    },
    {
       "id": "1b",
       "challenge":"Task2",
       "success": false
    },
    {
       "id": "1c",
       "challenge":"Task3",
       "success": false
    }
  ]
}

const setup = (state={}) => {
  const setupState = {...defaultState, ...state}
  return shallow(<BadgeChallenges challenges={setupState} />)
}
test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-challenges');
  expect(component.length).toBe(1);
});

test('renders expected amount of challenge nodes', () => {
  const wrapper = setup()
  const challengeListItemsNode = findByTestAttr(wrapper, 'challenge-item');
  expect(challengeListItemsNode.length).toBe(defaultState.challenges.length)
});

test('covers with an overlay when all challenges completed', () => {
  let challengesAllSuccessful = defaultState.challenges.map(challenge => {
    challenge.success = true;
    return challenge;
  });
  const wrapper = setup(challengesAllSuccessful);
  const badgeOverlay = findByTestAttr(wrapper, 'badge-overlay');
  const challengeListItemsNode = findByTestAttr(wrapper, 'challenge-item');
  expect(challengeListItemsNode.length).toBe(challengesAllSuccessful.length);
  expect(badgeOverlay.hasClass('all-complete')).toBe(true);
} )
