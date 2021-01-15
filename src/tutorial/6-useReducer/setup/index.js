import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import {reducer }from './reducer';
// import { data } from '../../../data';



const Index = () => {
  let [item, setItem] = useState('')

  const defaultState = {
    list: [],
    isModalOpen: false,
    modalContent:"Hello world"
  }


  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = { id: new Date().getTime().toString(), item }
    if (item) {
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setItem('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = ()=>{
      dispatch({type: "CLOSE_MODAL"})
  }
 
  return <>
    {state.isModalOpen && <Modal closeModal ={closeModal}  modalContent = {state.modalContent}/>}
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>

    {state.list.map((listItem) => {
      const { id, item } = listItem
      return <div key={id} className="item">
        <h4>{item}</h4>
        <button onClick={()=>
            dispatch({type: "REMOVE_ITEM", payload: id})
            }>remove</button>
      </div>
    })}
  </>;
};

export default Index;