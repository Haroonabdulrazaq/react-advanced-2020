import React, {useState} from 'react';
import {data} from './data';
import '../style/quote.scss';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaTumblrSquare, FaQuoteLeft } from 'react-icons/fa';
  

function SingleQoute() {
  let [counter, setCounter] = useState(0);

  const getNewQuote = () => {
    let rand = Math.floor(Math.random() * data.length);
    setCounter(rand);
  };
  return (
    <div id="quote-box">
      <p id="text" style={{color: data[counter]["color"]}}><FaQuoteLeft size="35px"/> {data[counter].quote}</p>
      <h4 id="author">- {data[counter].author}</h4>
      <div id="buttons">
        <div id="anchor">
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><AiFillTwitterSquare color={data[counter]["color"]} size="30px"/></a>
          <a id="tumblr-quote" href="tumblr.com/"> <FaTumblrSquare color={data[counter]["color"]} size="30px"/> </a>
        </div>
        <button id="new-quote"
         onClick={getNewQuote}
        style={{backgroundColor: data[counter]["color"]}}
        > New Quote </button>
      </div>
    </div>

  );
}

export default SingleQoute
