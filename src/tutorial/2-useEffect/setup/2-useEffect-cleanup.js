import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = ()=>{
      setSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', checkSize)
    return ()=>{
      window.removeEventListener('resize', checkSize)
    }
  })
  return <>
    <h2>Window</h2>
    <h1>{size}</h1>
  </>;
};

export default UseEffectCleanup;
