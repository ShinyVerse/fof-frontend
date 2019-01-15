import React from 'react';

//needs to be handed challenge, id and success through props

const IndividualChallenge = (props) => {
  let taskStatus;
  let completedTaskCSS;
  if (props.success) {
    completedTaskCSS = 'completed-task';
    taskStatus = (<span data-test='task-status'>&#10003;</span>)
  } else {
    completedTaskCSS = 'uncompleted-task';
    taskStatus = (<span data-test='task-status'>X</span>)
  }
  return (
    <div id={props.id} data-test='component-challenge' className='challenge-container-div'>
      <p data-test='challenge-task' className='challenge-task'>{props.challenge}</p>
      <button data-test='check-button' className={completedTaskCSS}>{taskStatus}</button>
    </div>
  )
}

export default IndividualChallenge;
