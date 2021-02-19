import React, {useState} from 'react';
import "./style.scss"

const MyCalculator = () => {
  // let[display, setDisplay] = useState([0]);
  let [expression, setExpression] = useState('');
  let [answer, setAnswer] = useState(0);
  let [decimal, setDecimal] = useState(".")
  
  
  const handleClick =(num)=> {
    // if(decimal === num){
    //   setDecimal('')
    // }
    if(expression.split("").some((element)=> element === '.' )){
      setDecimal('')
    }
    if(/[+-/*]/.test(num)){
      setDecimal('.')
    }
  
    setExpression((prev)=> prev + num);
    if(expression[expression.length -1] === "="){
      if(/0-9/.test(num)){
        setExpression(num)
      }else{
        setExpression(answer + num )
      }
    }
  }
  const handleOutput =()=>{
     setAnswer(eval(expression));
     setExpression((prev)=> prev + "=")
  }
  const handleClear =()=> {
    setDecimal(".")
    setAnswer(0)
    setExpression('')
  }
  return (
    <div>
      <h2>React Calculator</h2>
      <section className="calc-container">
        <div id="display">
          <input type="text" value={expression} placeholder={0} disabled/>
          <div>{answer}</div> 
        </div>
        <div className="btn-container">
          <div id="clear" className="btn" onClick={handleClear}>AC</div>
          <div id="one" className="btn" onClick={()=>handleClick(1)}>1</div>
          <div id="two" className="btn" onClick={()=>handleClick(2)}>2</div>
          <div id="three" className="btn" onClick={()=>handleClick(3)}>3</div>
          <div id="four" className="btn" onClick={()=>handleClick(4)}>4</div>
          <div id="five" className="btn" onClick={()=>handleClick(5)}>5</div>
          <div id="six" className="btn" onClick={()=>handleClick(6)}>6</div>
          <div id="seven" className="btn"onClick={()=>handleClick(7)}>7</div>
          <div id="eight" className="btn" onClick={()=>handleClick(8)}>8</div>
          <div id="nine" className="btn" onClick={()=>handleClick(9)}>9</div>
          <div id="zero" className="btn" onClick={()=>handleClick(0)}>0</div>
          <div id="decimal" className="btn" onClick={()=>handleClick(decimal)}>.</div>
          <div id="add" className="btn" onClick={()=>handleClick("+")}>+</div>
          <div id="subtract" className="btn" onClick={()=>handleClick("-")}>-</div>
          <div id="multiply" className="btn" onClick={()=>handleClick("*")}>x</div>
          <div id="divide" className="btn"onClick={()=>handleClick("/")}>/</div>
          <div id="equals" className="btn" onClick={handleOutput}>=</div>
        </div>
      </section>
    </div>
  )
}

export default MyCalculator;
