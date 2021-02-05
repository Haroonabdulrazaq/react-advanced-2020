import React from 'react';
import {bankOne} from './sound';


const Drum = () => {
  return (
    <div id="drum-machine">
      <h2>Drum Machine</h2>
        <div id="display">
          { bankOne.map((pad)=>{
            return <Pad key={pad.id} {...pad} /> 
          })
        }
        </div>
    </div>
  )
}


const Pad =({keyTrigger})=>{
  return <div className="pad-btn">
    {keyTrigger}
  </div>
}
export default Drum