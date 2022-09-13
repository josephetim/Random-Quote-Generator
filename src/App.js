import React from "react";
import { useState, useEffect } from 'react'

function App() {
  const [quote, setQuote] = useState("");
const [text, setText] = useState("");
const [author, setAuthor] = useState('');

const randomizer = () => {
  const quoteApi = new XMLHttpRequest();
  quoteApi.onload = function(){
    let data = quoteApi.responseText;
    let parsedData = JSON.parse(data)
   let initialQuote = parsedData[Math.floor(Math.random()*1643)];
  setQuote(initialQuote);
  setText(initialQuote.text)
  setAuthor(initialQuote.author)
  }
  quoteApi.open("GET", "https://type.fit/api/quotes");
  quoteApi.send()
  
}

useEffect( () => {
  randomizer()
    
}, [])


  return (
    <div className="App">
      <section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div  id="quote-box" className="card" style={{borderRadius: "15px"}}>
          <div className="card-body p-5">

            <div className="text-center mb-4 pb-2">
              <i className="fa fa-lightbulb-o" style={{fontSize:"60px"}}></i>
            </div>

            <figure className="text-center mb-0">
              <blockquote className="blockquote">
                <p className="pb-3">
                 <i className="fa fa-solid fa-quote-left " style={{marginRight:'10px'}}></i>
                  <span id="text" className="lead font-italic">{text}</span>
                  <i className="fa fa-quote-right fa-xs " style={{marginLeft:'10px'}}></i>
                </p>
              </blockquote>
              <figcaption id="author" className="blockquote-footer mb-0">
                {author}
              </figcaption>
              
            </figure>

          </div>
          <div className='d-flex justify-content-around mb-3'>
            <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank"><i  className="fa fa-twitter-square" style={{fontSize:"50px"}}></i></a> 
             <button onClick={randomizer} id="new-quote" type="button" className="btn btn-dark float-right">New Quote</button>
          </div>
          
        </div>
       
      </div>
    </div>
  </div>
 
</section>
    </div>
  );
}

export default App;
