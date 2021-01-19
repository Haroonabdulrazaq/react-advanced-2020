import React, {useState} from 'react';
import { data } from './data';
import './OurTours.css'


const OurTours = () => {

  let [tourData, setTourData] = useState(data)


  const handleClick =(id)=>{
    console.log(id)
    let newData = tourData.filter((tour)=> tour.id !== id )
    // console.log(newData)
    setTourData(newData)
  }

  return (
    <section className="all-tour">
      <h2 className="title">Our Tours</h2>
      {tourData.map((tour, index)=>{
        const {id, heading, img_url, price, text} = tour
      return <div key={id} className="single-tour">
          <img className="tour-img" src={img_url} alt={heading}/>
          <footer>
            <div className="tour-info">
            <h3 >{heading}</h3> <span className="tour-price">{price}</span>
            <p>{text}</p>
            </div>
          </footer>
            <button className="btn" onClick={()=> handleClick(id)}>Not interested</button>
          </div>
      })}
    </section>
  )
}

export default OurTours;
