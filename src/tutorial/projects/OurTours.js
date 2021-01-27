import React, {useState} from 'react';
import { data } from './data';
import './OurTours.css'
import SingleTour from './SingleTour';

const OurTours = () => {

  let [tourData, setTourData] = useState(data) 

  const handleClick =(id)=> {
    let newData = tourData.filter((tour)=> tour.id !== id )
    setTourData(newData)
  }

  return (
    <section className="all-tour">
      <h2 className="title">Our Tours</h2>
      {tourData.map((tour)=>{
      return <div className="single-tour" >
          <SingleTour key={tour.id} {...tour} ></SingleTour>
          <button className="btn" onClick={()=> handleClick(tour.id)}>Not interested</button>
        </div>
      })}
    </section>
  )
}

export default OurTours;