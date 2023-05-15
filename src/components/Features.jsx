import React from 'react'
import "../styles/Features.css"
import clear from "../images/clear.png"
import fast from "../images/fast.png"
import secure from "../images/secure.png"
import { useState, useEffect } from "react";




function Features() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (

    <div>
      {loading ? (
        <div id="loadir">
        <div class="wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
        </div>
      </div>
      ):(
        <div>
        <section>
          <div className="num-div">
              <p className='num-02'>02</p>
          </div>
  
          <div className='main'>
              <div className='heading'>
                  <h1>FEATURE LIST </h1>
              </div>
              <div className='features-list'>
                  <div className='list'>
                      <img src={clear} alt="" id='clear'/>
                      <h1>CLEAR</h1>
                  </div>
                  <div className='list'>
                      <img src={secure} alt="" id='secure'/>
                      <h1 id="secid">SECURE</h1>
                  </div>
                  <div className='list'>
                      <img src={fast} alt="" id='fast'/>
                      <h1>FAST </h1>
                  </div>
              </div>
          </div>
  
        </section>
      </div>
      )}
    </div>

    
  )
}

export default Features




