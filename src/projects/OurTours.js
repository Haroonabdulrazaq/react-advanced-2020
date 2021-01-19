import React, {useState} from 'react';
import { data } from './data';
import './OurTours.css'


const OurTours = () => {

  let [tourData, setTourData] = useState(data)
  // let [readmore, setReadmore] = useState(false)
  let [textContent, setTextContent] = useState("read more")


  const handleClick =(id)=>{
    let newData = tourData.filter((tour)=> tour.id !== id )
    setTourData(newData)
  }

  const handleRead =(id)=>{
     tourData.filter((tour)=> {
      let readless = tour.text.split(" ").slice(0)
        if(tour.id === id  && textContent === "read more" ){
          let newText = readless.join(" ")
          tour = {...tour, text: newText}
          setTextContent("read less")
        }else if(tour.id === id  && textContent === "read less" ){
          tour.text = readless.join(" ")
          setTextContent("read more")
        }
    })
  }

  return (
    <section className="all-tour">
      <h2 className="title">Our Tours</h2>
      {tourData.map((tour, index)=>{
        const {id, heading, img_url, price, text} = tour
        let less = ""
         if(textContent=== "read more" ){less = text.split(" ").slice(0, 25).join(" ")}else{less = text} 
      return <div key={id} className="single-tour">
          <img className="tour-img" src={img_url} alt={heading}/>
          <footer>
            <div className="tour-info">
            <h3 >{heading}</h3> <span className="tour-price">$ {price}</span>
            <p> {less} </p>
            <button className="btn" onClick={()=> handleRead(id)}>{textContent}</button>
            </div>
          </footer>
            <button className="btn" onClick={()=> handleClick(id)}>Not interested</button>
          </div>
      })}
    </section>
  )
}

export default OurTours;
