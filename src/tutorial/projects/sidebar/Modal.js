import React,{useState} from 'react';
import './modal.css';
import {AiFillCloseCircle} from 'react-icons/ai';

const Modal = () => {
  let [modal, setModal] = useState(false);
  return (
    <>
      {modal && <div className="modal-wrapper">
        <div onClick={()=>setModal(false) }> <AiFillCloseCircle size="25px" color="red"/></div>
        <h2>Modal content</h2>
      </div>}
       <button className="btn modal-btn" onClick={()=> setModal(true)}> modal</button>
    </>   
  )
}

export default Modal;
