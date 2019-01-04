import React from 'react';
import ReactDOM from 'react-dom';
import CheckerButton from './CheckerButton';

it('renders BadgeList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckerButton
    handleCheck={function() {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
