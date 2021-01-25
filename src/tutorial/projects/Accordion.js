import React, { Component } from 'react';
import './Accordion.css';
import {Faq} from './AccordionData'

class Accordion extends Component {
  render() {
    return (
      <div className="flex-container">
        <h2 className="faq">Frequently Asked Questions </h2>
        <div className="question-answer">
            {Faq.map((frequent)=>{
              const {question, id} = frequent
              return <div className="each-que-ans" key={id}>
                <div className="header">
                  <h4 className="question">{question} </h4> <button className="btn add-btn">+</button>
                </div>
              </div>
            })}
        </div>
      </div>
    )
  }
}

export default Accordion
