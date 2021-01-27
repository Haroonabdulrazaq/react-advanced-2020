import React, {useState} from 'react';
import './GroceryBud.css';
import {ImBin} from "react-icons/im";
import {BsPencil} from "react-icons/bs";

const GroceryBud = () => {
  let [item, setItem] = useState('')
  let [list, setList] = useState([])
  let [isEditing, setIsEditing] = useState(false) 
  let [editId, setEditId] = useState(null)

  const handleSubmit =(e)=>{
    e.preventDefault();
     if(item && isEditing){ 
      setList(
         list.map((listItem) => {
          if (listItem.id === editId) {
            return { ...listItem, item: item };
          }
          return listItem;
        }) 
      );
      setEditId(null)
      setIsEditing(false);
    }else{
      let newItem = { id: new Date().getTime().toString(), item: item }
      setList([...list, newItem ])
    }
    setItem('')
  }

  const handleDelete= (id)=> {
    let newList = list.filter((item)=> item.id !== id)
    setList(newList)
  }

  const handleEdit=(id)=> {
    setEditId(id)
    setIsEditing(true)
   const newItem = list.find((item)=> item.id === id)
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
          <button >Submit</button>
        </form>

        <article>
          <ol className="unordered-list">
          {list.map((listItem)=>{
            const {id, item} = listItem
            return <li className="item" key={id}>
              <p >{item}</p>
              <div className="icon-button">
                <button onClick={(e)=> handleEdit(id)}><BsPencil color="green" title="edit"/></button>
                <button onClick={()=> handleDelete(id)}><ImBin title="delete" color="red"/></button>
              </div>
            </li>
          })}
          <button className="btn" onClick={()=> setList([])}> Clear items</button>
          </ol>
          
        </article>
    </div>
  )
}

export default GroceryBud;
