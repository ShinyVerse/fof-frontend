import React from 'react';
import Badge from '../Badge/Badge'

function BadgeList(props) {
  return (
    <div>
      <ul className="badgeContainer">
        {props.badges.map((badge,index) => {
          return <Badge
            key={ "badge" + index }
            badge={ badge }
            badgeName={props.badgeInfo[index].name}
            badgeChallenges={props.badgeInfo[index].challenges}/>
        })}
      </ul>
    </div>
  )
}

export default BadgeList;
