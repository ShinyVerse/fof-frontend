import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import IndividualChallenge from './IndividualChallenge';

import { findByTestAttr } from '../../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const UNCHECKED_TASK = 'X';
const CHECKED_TASK = "✓";

const defaultProps = {
     "id": "1a",
     "challenge":"Get swimming. If you can't, take lessons. Otherwise grow confidence in a pool.",
     "success": false
  };

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<IndividualChallenge {...setupProps}/>);
};


test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-challenge');
  expect(component.length).toBe(1);
});
describe('challenge', () => {
  let wrapper;
  let challengeTask;
  beforeEach(() => {
    wrapper = setup();
    challengeTask = findByTestAttr(wrapper, 'challenge-task');
  });
  test('renders a challenge', () => {
    expect(challengeTask.length).toBe(1);
  });
  test('challenge contains correct task', () => {
    expect(challengeTask.text()).toBe(defaultProps.challenge);
  });
});
describe('check button - unchecked', () => {
  let wrapper;
  let checkButton;
  beforeEach(() => {
    wrapper = setup();
    checkButton = findByTestAttr(wrapper, 'check-button');
  });
  describe('check button - unchecked', () => {
    test('renders a check button', () => {
      expect(checkButton.length).toBe(1);
    });
    test('check button initially renders as unchecked', () => {
      expect(checkButton.text()).toContain(UNCHECKED_TASK);
    });
  });
});

test('check button appears as tick when success: true', () => {
    const wrapper = setup({
         "id": "1a",
         "challenge":"Get swimming.",
         "success": true
      });
    const checkButton = findByTestAttr(wrapper, 'check-button');
    expect(checkButton.text()).toContain(CHECKED_TASK);
});
