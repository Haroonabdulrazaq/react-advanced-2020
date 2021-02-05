import React from 'react';
import {bankOne} from './sound';
import './drum.scss'


const Drum = () => {
  let [key, setKey] = React.useState([])
  return (
    <>
      <h2>Drum Machine</h2>
      <div id="drum-machine">
        <div id="display"> 
        { key.map((letter, index)=>{
          return <span key={index}>{letter}</span>
          })
        }
        </div>
        <div id="btn-container">
          { bankOne.map((pad)=>{
            return <Pad key={pad.id} {...pad} setKey={setKey}/> 
          })
        }</div>
      </div>
    </>
  )
}


const Pad =({id, keyTrigger, keyCode,url, setKey})=>{
  React.useEffect(()=> {
    document.addEventListener('keydown', keyPress);
    return ()=>{ document.removeEventListener('keydown', keyPress);}
  },)

  const keyPress =(e)=>{
    if(e.keyCode === keyCode){
      playSound()
    }
  }
  const playSound =()=>{
    const audioTag = document.getElementById(keyTrigger);
    audioTag.currentTime =0
    audioTag.play()
     setKey(prev=> [...prev, keyTrigger])

  }
  return <div className="drum-pad" id={id} onClick={playSound}>
    <audio id={keyTrigger} className="clip" src={url}/>{keyTrigger} 
  </div>
}
export default Drum