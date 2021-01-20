import React, { useReducer} from 'react';
import { data } from './data';
import './OurTours.css'

const reducer=(state, action)=>{
  switch(action.type){
    case 'REMOVE_ITEM':
      return {
        ...state,
        tourData: state.tourData.filter((tour)=> tour.id !== action.payload )
      }
      case 'READ_MORE':
        return {
          ...state,
          textContent: "read more"   
        }
      case 'READ_LESS':
        return {
          ...state,
          textContent: "read less" 
        }

    default: throw new Error("Action type mismatch")
  }
}

const OurTours = () => {

  const defaultState = {
    tourData: data,
    textContent: "read more"
  }

  // let [textContent, setTextContent] = useState("read more")

 const [state, dispatch] = useReducer(reducer, defaultState)

  const handleRemove =(id)=>{
    dispatch({type: "REMOVE_ITEM", payload: id})
  }

  const handleRead =(id)=> {
     state.tourData.filter((tour)=> {
      let readless = tour.text.split(" ").slice(0)
        if(tour.id === id  && state.textContent === "read more" ){
          let newText = readless.join(" ")
          tour = {...tour, text: newText}
          //  setTextContent("read less")
          dispatch({type:'READ_LESS' })
          
        }else if(tour.id === id  && state.textContent === "read less" ){
          tour.text = readless.join(" ")
          //  setTextContent("read more") 
          dispatch({type:'READ_MORE'})
        }
    })
  }

  return (
    <section className="all-tour">
      <h2 className="title">Our Tours</h2>
      {state.tourData.map((tour, index)=>{
        const {id, heading, img_url, price, text} = tour
        let less = ""
         if(state.textContent=== "read more" ){less = text.split(" ").slice(0, 25).join(" ")}else{less = text} 
      return <div key={id} className="single-tour">
          <img className="tour-img" src={img_url} alt={heading}/>
          <footer>
            <div className="tour-info">
            <h4 >{heading}</h4> <span className="tour-price">$ {price}</span>
            <p className="tour-text"> {less} </p>
            <button className="btn" onClick={()=> handleRead(id)}>{state.textContent}</button>
            </div>
          </footer>
            <button className="btn" onClick={()=> 
             handleRemove(id)}
              >Not interested</button>
          </div>
      })}
    </section>
  )
}

export default OurTours;
