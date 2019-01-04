import React from 'react';
import ReactDOM from 'react-dom';
import BadgeList from './BadgeList';
import BadgeJson from '../../assets/badge.json'

it('renders BadgeList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BadgeList
    badges={["mockImg1", "mockImg2", "mockImg3"]}
    badgeInfo={BadgeJson} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
