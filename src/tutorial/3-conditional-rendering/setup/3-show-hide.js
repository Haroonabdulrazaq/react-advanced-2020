import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [isShow, setIsShow] = useState(false);
  const [size, setSize] = useState(window.innerWidth)

  const checkSize =()=>{
    setSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', checkSize)
    return ()=>{
      window.removeEventListener('resize', checkSize )
    }
  },[])
  return <>

  <button className="btn" onClick={()=>{setIsShow(!isShow)}}>Show/Hide</button>
        {isShow && <div>
          <h2>Window</h2>
          <h2>Size: {size}</h2>
          </div>}
        </>;
};

export default ShowHide;
