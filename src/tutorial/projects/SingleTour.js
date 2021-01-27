import React, {useState} from 'react';
import './OurTours.css'


const SingleTour = (props) => {
 let [showInfo, setShowInfo] = useState(false)
  let {img_url, heading, text, price} = props
  return (
    <div>
      <img className="tour-img" src={img_url} alt={heading}/>
          <footer>
            <div className="tour-info">
            <h4 >{heading}</h4> <span className="tour-price">$ {price}</span>
            <p className="tour-text">{ showInfo ?  text : text.split(" ").slice(0,25).join(" ")}</p>
            <p className="link" onClick={()=> setShowInfo(!showInfo)}>{showInfo? "Read less": "Read more"}</p>
            </div>
          </footer> 
    </div>
  )
}

export default SingleTour
