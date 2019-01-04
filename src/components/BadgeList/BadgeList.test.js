import React from 'react';
import ReactDOM from 'react-dom';
import BadgeList from './BadgeList';

it('renders BadgeList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BadgeList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
