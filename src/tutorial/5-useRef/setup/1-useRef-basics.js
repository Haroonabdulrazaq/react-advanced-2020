import React, { useState,useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const [data, setData] = useState([])

 const handleSubmit =(e)=>{
  e.preventDefault();
  setData([...data, refContainer.current.value])
  refContainer.current.value =''
  }
  return <>
  <h2 style={{margin: "2rem"}}>TodList</h2>
  <form className="form" onSubmit={handleSubmit}>
    <input type="text" ref ={refContainer}/>
    <button className="btn" type="submit">Submit</button>
  </form>
  <ol>
    {data.map((data, index)=>(
      <li className="item" key={index}>
        <p>{index } { data}</p>
      </li>
    ))}
  </ol>
  </>;
};

export default UseRefBasics;
