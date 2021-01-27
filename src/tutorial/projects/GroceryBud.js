import React, {useState} from 'react';
import './GroceryBud.css'


const GroceryBud = () => {
  let [item, setItem] = useState('')

  const handleSubmit =()=>{
    
  }



  return (
    <div className="wrapper">
      <h2 className="heading">Grocery Bud</h2>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        name= "grocery"
        value= {item}
        onChange={()=> setItem(e.target.value)}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default GroceryBud;
