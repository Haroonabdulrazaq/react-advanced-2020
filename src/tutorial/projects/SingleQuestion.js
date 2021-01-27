import React, { useState } from 'react';

const SingleQuestion = (props) => {
  let [showInfo, setShowInfo] = useState(false)
  return (
    <div>
      <header>
        {props.question}
      </header>
      <button onClick={()=> setShowInfo(!showInfo)}> 
        {showInfo ? '-': '+' }
      </button>
      <p>
        {showInfo && props.answer }
      </p>
    </div>
  )
}

export default SingleQuestion;
