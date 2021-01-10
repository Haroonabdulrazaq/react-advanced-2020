import React, { useState } from 'react';

const UseStateObject = () => {

  // const [person, setPerson] = useState({
  //   name: "Peter",
  //   age: 24,
  //   message:  "Here is the message"
  // })
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('Random Message')
  const handleMessage=()=>{
    if( message === "Here is the message"){
      setMessage("Random People send message")
    }else{
      setMessage("Here is the message")
    }
    
  }

  return <>
          <h3>{ name}</h3>
          <h3>{ age}</h3>
          <h3>{ message}</h3>
          <button className="btn" onClick={handleMessage}> Random Message</button>
        </>;
};

export default UseStateObject;
