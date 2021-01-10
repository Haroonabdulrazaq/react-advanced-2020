import React, { useState } from 'react';

const UseStateBasics = () => {
 
  const [text, setText] = useState('Random Title')
  const handleClick =()=>{
   text== 'Random Title'? setText('Hello People'): setText('Random Title')
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Random title
      </button>
    </React.Fragment>
    
    );
};

export default UseStateBasics;
