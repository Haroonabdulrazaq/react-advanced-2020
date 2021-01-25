import React, { Component } from 'react';
import {data} from './reviewData';
import './Reviews.css';

class Reviews extends Component {

  render() {
    console.log(data)
    return (
      <section className="section-container">
        <div className="title">
          <h2>our Reviews</h2>
          <div className="underline"></div>
        </div>
      <div className="container">
        <div className="info-container">
        <img src={data.img_url} alt={data.title} className="img" />
        <h3>{data.name}</h3>
        </div>
      </div>
      </section>
    )
  }
}

export default Reviews;
