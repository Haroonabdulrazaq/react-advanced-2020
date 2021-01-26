import React, { Component } from 'react';
import './Accordion.css';
import {Faq} from './AccordionData'

class Accordion extends Component {
  constructor(props){
    super(props);

    this.state ={
      isClick: false
    }
    this.handleOpen =  this.handleOpen.bind(this)
    this.handleClose =  this.handleClose.bind(this)
  }

   handleOpen(id){
    Faq.find((frequent)=> {
      if(frequent.id === id ){
         frequent.view= true
         this.setState({
          isClick: true
        })
      }})
  }

  handleClose(id){
    Faq.find((frequent)=> {
      if(frequent.id === id ){
         frequent.view = false
         this.setState({
          isClick: false
        })
      }})
  }
  // Put data as a state
  // Get that one element you want to toggle
  // Update the state to change the view and button of that one element
  render() {
    return (
      <div className="flex-container">
        <h2 className="faq">Frequently Asked Questions</h2>
        <div className="question-answer">
            {Faq.map((frequent)=>{
              const {question, answer, view, id} = frequent
              return <div className="each-que-ans" key={id}>
                <div className="header">
                  <h4 className="question">{question} </h4> 
                  {view && <button className="btn add-btn" onClick={()=> this.handleClose(id)}> - </button>}
                  {!view && <button className="btn add-btn" onClick={()=> this.handleOpen(id)}> + </button>}
                </div>
                <p>{view && answer}</p>
              </div>
            })}
        </div>
      </div>
    )
  }
}

export default Accordion
