import React, { useState, useReducer } from 'react';
import Modal from './Modal';
// import {reducer }from './reducer';
import { data } from '../../../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        isModalOpen: true,
        list: [...state.list, action.payload],
        modalContent: "Item Added"
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        isModalOpen: true,
        list: state.list.filter((item) => item.id !== action.payload),
        modalContent: "Item Removed"
      }
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: "No value Added"
      }
  }
  throw new Error("Action type not found")
}

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
 
  return <>
    {state.isModalOpen && <Modal modalContent = {state.modalContent}/>}
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