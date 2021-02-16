import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  let [value , setValue] = useState(0)
  
  const handleIncrease=()=>{
     setValue((value)=>value + 1) 
  }


    useEffect(()=>{
      if(value > 0){
    document.title = `New Messages (${value})`}
  },[value])
  return <>
      <h2>{value}</h2>
      <button className="btn" onClick={handleIncrease}>click me</button>
    </>
  ;
};

export default UseEffectBasics;
