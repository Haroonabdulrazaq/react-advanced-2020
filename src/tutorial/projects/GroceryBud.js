import React, {useState, useReducer} from 'react';
import './GroceryBud.css';
import {ImBin} from "react-icons/im";
import {BsPencil} from "react-icons/bs";


const reducer=(state, action)=>{
  switch (action.type) {
    case "ADD_ITEM":
    return {
      ...state,
      list: [...state.list, action.payload]
    }
    case "DELETE_ITEM":
      let newList = state.list.filter((item)=> item.id !== action.payload)
      return {
        ...state,
        list: newList
      }
    case "CLEAR_ITEM":
      return {
        ...state,
        list: []
      }
  
    default:
      return "Action type mismatch" 
 
  }

}


const GroceryBud = () => {
  let [item, setItem] = useState('')
  // let [list, setList] = useState([])
  let [isEditing, setIsEditing] = useState(false) 
  let [editId, setEditId] = useState(null)
  let [btnContent, setBtnContent] = useState("Submit")
  
  const defaultState ={
    list: [],
    isEditing: false,
    edited: null,
    btnContent: "Submit"
  }

  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit =(e)=> {
    e.preventDefault();
     if(item && isEditing){ 
      state.list(
         state.list.map((listItem) => {
          if (listItem.id === editId) {
            return { ...listItem, item: item };
          }
          return listItem;
        }) 
      );
      setEditId(null)
      setIsEditing(false);
      setBtnContent("Submit")
    }else{
      let newItem = { id: new Date().getTime().toString(), item: item }
      // setList([...list, newItem ])
      dispatch({type:"ADD_ITEM", payload: newItem})
    }
    setItem('')
  }

  const handleDelete= (id)=> {
    // let newList = list.filter((item)=> item.id !== id)
    // setList(newList)
    dispatch({type: "DELETE_ITEM", payload: id})
  }

  const handleEdit=(id)=> {
    setEditId(id)
    setIsEditing(true)
    setBtnContent("Edit")
   const newItem = state.list.find((item)=> item.id === id)
   setItem(newItem["item"])
  }

  return (
    <div className="wrapper">
      <h2 className="heading">Grocery Bud</h2>
      <form className='form' onSubmit={handleSubmit}>
            <input
              type='text'
              name='item'
              value={item}
              placeholder="E.g Boiler"
              onChange={(e)=> setItem(e.target.value)}/>
          <button >{btnContent}</button>
        </form>

        <article>
          <ol className="unordered-list">
          {state.list.map((listItem)=>{
            const {id, item} = listItem
            return <li className="item" key={id}>
              <p >{item}</p>
              <div className="icon-button">
                <button onClick={(e)=> handleEdit(id)}><BsPencil color="green" title="edit"/></button>
                <button onClick={()=> handleDelete(id)}><ImBin title="delete" color="red"/></button>
              </div>
            </li>
          })}
          <button className="btn" onClick={()=> dispatch({type:"CLEAR_ITEM"})}> Clear items</button>
          </ol>
          
        </article>
    </div>
  )
}

export default GroceryBud;
