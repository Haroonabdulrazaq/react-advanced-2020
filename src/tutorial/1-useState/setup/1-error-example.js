import React from 'react';

const ErrorExample = () => {
 
   let title = 'Random Title'
 
 
  const handleClick=()=>{
 
      title= "Hello People"
    console.log(title)
  }
  return (
    <React.Fragment>
    
  <h2>{title}</h2> 
  <button className="btn" onClick={handleClick}> Change Title</button>
  </React.Fragment>
  )
};

export default ErrorExample;
