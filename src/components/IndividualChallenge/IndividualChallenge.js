import React from 'react';

//needs to be handed challenge, id and success through props

const IndividualChallenge = (props) => {
  let taskStatus;
  if (props.success) {
    taskStatus = (<span data-test='task-status' className='completed-task'>&#10003;</span>)
  } else {
    taskStatus = (<span data-test='task-status' className='uncompleted-task'>'x'</span>)
  }
  return (
    <div data-test='component-challenge'>
      <p data-test='challenge-task'>{props.challenge}</p>
      <button data-test='check-button'>{taskStatus}</button>
    </div>
  )
}

export default IndividualChallenge;
