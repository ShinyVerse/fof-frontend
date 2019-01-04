import React from 'react';

function CheckerButton(props) {
  return <button className="challengeChecker" onClick={props.handleCheck}> o </button>
}

export default CheckerButton;
