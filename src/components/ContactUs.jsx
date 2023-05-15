import React from 'react'
import "../styles/ContactUs.css"
import { useEffect } from 'react'
import { useState } from 'react'
import abhi from "../images/abhi-img.jpg"
import ankur from "../images/ankur-img.png"
import gurjas from "../images/gurjas-img.png"
import ojous from "../images/ojous-img.png"
import pramod from "../images/pramod-img.png"

// Add the click to write email feature for the emails for others, the problem is we are changing the innerhtml as a "string", but we have to change it to a "anchor tag". 


function ContactUs() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const [src, setSrc] = useState(abhi);


function abhiC () {
  
  // document.getElementById('person-img').setAttribute('src',ing);
  setSrc(abhi);
  document.getElementById("person-email").innerHTML = "abhiram.sathiraju@gmail.com";
  document.getElementById('sendemail').setAttribute('href',"mailto:abhiram.sathiraju@gmail.com");
};
  
function gurC () {
  // document.getElementById('person-img').setAttribute('src',ing1);
  setSrc(gurjas);
  document.getElementById("person-email").innerHTML = "21BCS2669@cuchd.in";
  document.getElementById('sendemail').setAttribute('href',"mailto:21BCS2669@cuchd.in")

};

function ankurC () {
  setSrc(ankur)
  // document.getElementById('person-img').setAttribute('src',ing);
  document.getElementById("person-email").innerHTML = "21BCS2649@cuchd.in";
  document.getElementById('sendemail').setAttribute('href',"mailto:21BCS2649@cuchd.in")
};

function ojousC () {
  // document.getElementById('person-img').setAttribute('src',ing1);
  setSrc(ojous);
  document.getElementById("person-email").innerHTML = "21BCS2688@cuchd.in";
  document.getElementById('sendemail').setAttribute('href',"mailto:21BCS2688@cuchd.in")
};

function pramodC () {
  // document.getElementById('person-img').setAttribute('src',ing);
  setSrc(pramod);
  document.getElementById("person-email").innerHTML = "21BCS2700@cuchd.in";
  document.getElementById('sendemail').setAttribute('href',"mailto:21BCS2700@cuchd.in")
};

  return (
    <div>
      {loading? (
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
        <section className='content'>


        <div className='head'>
            <div className='team-name'>
                <h1>TEAM ABHIRAM</h1>
            </div>
            <p className='num-04'>04</p>
        </div>

        <div className='main-content'>
            <div>
                <h1>Want to work with us? Get in touch <span className='heart'>&lt;3</span></h1>
            </div>
        </div>
        <div className='lower'>
            <div className='left-block'>
                <ul className='names'>
                    <li className='name abhi' onClick={abhiC}> Abhiram</li>
                    <li className='name gurjas' onClick={gurC}>Gurjaspreet</li>
                    <li className='name ankur' onClick={ankurC}>Kumar Ankur</li>
                    <li className='name ojous' onClick={ojousC}>Ojous Saxena</li>
                    <li className='name pramod' onClick={pramodC}>Pramod</li>
                </ul>
            </div>
            <div className='right-block'>
                <img src={src} alt="" id='person-img' loading='lazy'/>
                <p style={{zIndex:99999, position:'relative'}} id='person-email'> <a href='mailto:abhiram.sathiraju@gmail.com' target='_blank' id='sendemail' style={{position:'relative'}}> abhiram.sathiraju@gmail.com</a> </p>
            </div>
        </div>
      </section>
      )}
    </div>
  )
}

export default ContactUs
