import React, { useState } from 'react';

const SingleQuestion = (props) => {
  let [showInfo, setShowInfo] = useState(false)
  return (
    <div>
      <header style={{display:"inline"}}>
        {props.question}
        <button className="btn" onClick={()=> setShowInfo(!showInfo)}> 
        {showInfo ? '-': '+' }
      </button>
      </header>
      
      <p>
        {showInfo && props.answer }
      </p>
    </div>
  )
}

export default SingleQuestion;
