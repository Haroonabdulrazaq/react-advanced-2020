import React, { useState, useReducer } from 'react';
import Modal from './Modal';
// import { data } from '../../../data';


const reducer=(state, action)=> {

  switch(action.type){
    case 'ADD_ITEM':
    const newPeople = [...state.people, action.payload]
    return {
          ...state,
          people: newPeople,
          isModalOpen: true,
          modalContent: "item added"}
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: "No value added"}
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false
      }
    default:
      throw new Error('No matching action type')
  }
  
}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ""
}

const Index = () => {
  let [item, setItem] = useState('')
  
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(item){
      const newItem = {id: new Date().getTime().toString(), item}
      console.log(newItem)
      dispatch({
        type: "ADD_ITEM",
        payload: newItem
      })
      setItem('')
    }else{
      dispatch({type: 'NO_VALUE'})
    }
  }
  const handleChange =(e)=>{
   setItem(e.target.value)
  }

  const closeModal =()=>{
    dispatch({
      type: "CLOSE_MODAL"
    })
  }
 
  return <>
   {state.isModalOpen && <Modal modalContent= {state.modalContent}/>}
 <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            name="item"
            value={item}
            onChange={(e)=>{handleChange(e)}}
          />
        </div>
        <button type='submit'>Add </button>
 </form>

 <ul>
  
   {state.people.map((listItem, index)=>{
     return <div key={index}>
       <h4 className="item">{listItem.item}</h4>
     </div>
   })}
 </ul>
  
  </>;
};

export default Index;