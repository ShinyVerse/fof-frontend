import React from 'react';
import ReactDOM from 'react-dom';
import CheckerButton from './CheckerButton';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { handleCheck: () => {  } };

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<CheckerButton {...setupProps} />);
}

const findByTestAttr = (wrapper, val, selector ='data-test') => {
  return wrapper.find(`[${selector}='${val}']`);
};

test('renders button without crashing, initally displays ` o `', () => {
  const wrapper = setup();
  expect(wrapper.text()).toContain('o');
});

test('displays a check when button is clicked', () => {
  //to do, spy on
});
