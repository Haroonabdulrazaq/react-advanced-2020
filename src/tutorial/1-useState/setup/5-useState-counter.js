import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value , setValue] = useState(0)
  const handleDecrease=()=>{
    setValue(( value)=> value - 1 )
  }
  const handleReset=()=>{
    setValue(0)
  }
  const handleIncrease=()=>{
    setValue(( value)=> value + 1 )
  }
  const complexCounter =()=>{
    setTimeout(()=>{ setValue(( value)=> value + 1 )},2000)
  }
  return <>
    <section style={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={handleDecrease}>Decrease</button>
      <button className="btn" onClick={handleReset}>Reset</button>
      <button className="btn" onClick={handleIncrease}>Increase</button>
    </section>

    <section style={{margin: '4rem 0'}}>
      <h2>More Complex Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexCounter}>Increase Later</button>
    </section>
  </>;
};

export default UseStateCounter;
