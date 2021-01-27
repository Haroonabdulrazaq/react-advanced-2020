import React, {useState} from 'react';
import { data } from './data';
import './OurTours.css'
import SingleTour from './SingleTour';

const OurTours = () => {

  let [tourData, setTourData] = useState(data)
  // let [textContent, setTextContent] = useState("read more")
  // let [more, setMore] = useState(false)
 

  const handleClick =(id)=> {
    let newData = tourData.filter((tour)=> tour.id !== id )
    setTourData(newData)
  }

//   const handleRead = (id)=> {   
//     tourData.filter((tour)=> {
//       if (tour.id === id && textContent === "read more" )  { 
//        setMore(true)
//        setTextContent("read less")
//        let moreText = tour.text.split(" ").slice(0).join(" ")
//        tour ={...tour, text: moreText}
//       }
//       else if (tour.id === id && textContent === "read less" ) { 
//         setMore(false)
//         setTextContent("read more")
//         let lessText = tour.text.split(" ").slice(0,25).join(" ")
//         tour ={...tour, miniText: lessText }
//       }
//   })
// }

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





{/* <div key={id} className="single-tour">
          <img className="tour-img" src={img_url} alt={heading}/>
          <footer>
            <div className="tour-info">
            <h4 >{heading}</h4> <span className="tour-price">$ {price}</span>
            <p className="tour-text">{more && text} {!more && miniText} </p>
            <button className="btn" onClick={()=> handleRead(id)}>{textContent}</button>
            </div>
          </footer> */}