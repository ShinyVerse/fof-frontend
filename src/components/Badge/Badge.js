import React from 'react';
import CheckerButton from '../CheckerButton/CheckerButton';

function handleCheck(event){
    event.target.style.backgroundColor = "green";
    event.target.style.border = "black 1.5px solid";
    event.target.innerHTML = " &#10003 ";
  }


function Badge(props) {
  return (
    <li>
      <div className="badgeImage">
        <img src={props.badge} alt={props.badgeName + " Icon"} />
        <h1 className="badgeTitle">{props.badgeName}</h1>
      </div>
      <div className="badgeChallenges">
        {props.badgeChallenges.map((challenge, index) => {
          return(
            <div className="challengeContainer" key={"challenge" + index}>
              <p className="challengeSection">{challenge}</p>
              <CheckerButton handleCheck={handleCheck} />
            </div>
          )
        })}
      </div>
    </li>
  )
}

export default Badge;
