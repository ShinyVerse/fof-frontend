import React from 'react';

function Badge(props) {
  return (<li>
    <img src={props.badge} alt={props.badgeName + " Icon"} />
    <h1 className="badgeTitle">{props.badgeName}</h1>
    </li>
  )
}

export default Badge;
