import React from 'react';
import SingleQuestion from './SingleQuestion';
import {Faq} from './AccordionData';


const Question = () => {
  // let[questions, setQuestions] = useState(Faq)
  return (
    <div>
      {Faq.map((question)=>{
         return <SingleQuestion key={question.id} {...question}/>
      })}
     
    </div>
  )
}

export default Question
