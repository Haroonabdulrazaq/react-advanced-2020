import React, {useState} from 'react';
import './GroceryBud.css';
import {ImBin} from "react-icons/im";
import {BsPencil} from "react-icons/bs";

const GroceryBud = () => {
  let [item, setItem] = useState('')
  let [list, setList] = useState([])

  const handleSubmit =(e)=>{
    e.preventDefault()
    let newItem ={
                  id: new Date().getTime().toString(),
                  item: item
                }
                console.log(newItem)
    setList([ ...list,
      newItem
    ])
    setItem('')
  }

  const handleDelete= (id)=> {
    let newList = list.filter((item)=> item.id !== id)
    setList(newList)
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
              <button className="icon-button">
                <span onClick={()=> handleDelete(id)}><BsPencil color="green" title="edit"/></span>
                <span><ImBin title="delete" color="red"/></span>
               
              </button>
            </li>
          })}
          <button className="btn" onClick={()=> setList([])}> Clear items</button>
          </ol>
          
        </article>
    </div>
  )
}

export default GroceryBud;
