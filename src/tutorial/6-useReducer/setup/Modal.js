import React, { useEffect } from 'react';

const Modal = (props) => {
  return <div className="modal">
      <p>{props.modalContent}</p>
    </div>;
};

export default Modal;
