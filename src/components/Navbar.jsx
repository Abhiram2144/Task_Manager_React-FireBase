import React, { useEffect } from 'react'
import "../styles/Navbar.css";
import logo from "../images/logo-no-background.png"
import hovsound from "../audio/hover-sound.wav"
import { useNavigate } from 'react-router-dom';

import {auth, googleProvider} from "../config/firebase.config"
import{
  signInWithPopup, signOut
} from "firebase/auth";
// import {useState} from "react";


import { Link } from 'react-router-dom';
function Navbar() {


  
  const navigate = useNavigate();
  const todooption = document.querySelectorAll(".logged-in");
  const signinoption = document.querySelectorAll('.logged-out');
  const audio = new Audio(hovsound);

  const setupUI = (user) =>{
    if(user){
      todooption.forEach(item => item.style.display = "block");
      signinoption.forEach(item => item.style.display = "none");
    }
    else{
      todooption.forEach(item => item.style.display = "none");
      signinoption.forEach(item => item.style.display = "block");
    }
  }



useEffect(()=>{

  
},[]);

auth.onAuthStateChanged(user=>{
  if(user){
    setupUI(user);
  }
  else{
    setupUI();
  }
})

  const signInWithGoogle = async () => {
    audio.play();
    try {
      await signInWithPopup(auth, googleProvider);
      auth.onAuthStateChanged(user=>{
        if(user){
          setupUI(user);
        }
        else{
          setupUI();
        }
      })
      alert("Succesfully Logged-IN");
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    audio.play();
    try {
      await signOut(auth);
      
    } catch (err) {
      console.error(err);
    }
    navigate('/');
  };

  const soundfun = () =>{
    audio.play();
  }

  


  return (
    <div>
      <nav className='nav-comp' style={{zIndex:999999}}>
        <div style={{zIndex:999999}} id='logo-div'>
          <Link to="/"><img src={logo} alt="" className='logo-img'/></Link>
            
        </div>

        
        
        
        <div className="options" style={{zIndex:999999}}>
            <ul className='options-list'>
                <li id='home-id' >
                <div className='num-remove'><span style={{fontSize:14}}>00</span> </div>
                    <Link to="/" onMouseOver={soundfun}>HOME</Link>
                </li>
                <li id='purpose-id'>
                    <div className='num-remove'><span style={{fontSize:14}}>01</span> </div>
                    <Link to="/purpose" onMouseOver={soundfun}>PURPOSE</Link>
                </li>
                <li id='features-id' > 
                    <div className='num-remove'><span style={{fontSize:14}}>02</span> </div>
                    <Link to="/features" onMouseOver={soundfun}>FEATURES</Link>
                </li>
                <li id='faq-id'>
                    <div className='num-remove'><span style={{fontSize:14}}>03</span> </div>
                    <Link to="/faq" onMouseOver={soundfun}>FAQ</Link>
                </li>
                <li id='contact-id'>
                    <div className='num-remove'><span style={{fontSize:14}}>04</span> </div>
                    <Link to="/contactus" onMouseOver={soundfun}>CONTACT US</Link>
                </li>
                {/* todo space  */}
                <li id="todo-id">
                    <div className='num-remove'><span className='logged-in' style={{fontSize:14}}>05</span> </div>
                    <Link className='logged-in' to="/todo-space" onMouseOver={soundfun}>TODO SPACE</Link>
                </li>
            </ul>
            
        </div>
        <div className='activity-btns'>
            <button className='logged-out' onClick={signInWithGoogle}>Sign In</button>
            <button className='logged-in' onClick={logout} >Log Out</button>
        </div>

        <div className='activity-btns' id="mobile-btns">
            <button className='logged-out' onClick={signInWithGoogle}>Sign In</button>
            <button className='logged-in' onClick={logout} >Log Out</button>
        </div>



        


      </nav>
    </div>
  )
}

export default Navbar
