import React, { Component } from 'react';
import {data} from './reviewData';
import './Reviews.css';

class Reviews extends Component {
  constructor(props) {
   super(props)
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrev(){
    if(counter === 4){
      this.setState({counter: 0})
    }else {
      this.setState((prevState, props)=>({
        counter: prevState.counter - 1
      }))
    }
  }
  handleNext(){
    console.log("Next me")
  }



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
          <img src={data[0]["img_url"]} alt={data[0]["title"]} className="img" />
          <h4>{data[0]["name"]}</h4>
          <h4 className="role">{data[0]["role"]}</h4>
          <p className="review">
            {data[0]["review"]}
          </p>
          <div className="buttons">
            <span className="previous" onClick={this.handlePrev}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
            </span>
            <span className="next"  onClick={this.handleNext}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
            </span>
            <div>
              <button className="btn">Suprise me</button>
            </div>
          </div>
        </div>
      </div>
      </section>
    )
  }
}

export default Reviews;
