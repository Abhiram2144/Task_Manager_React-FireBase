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
        <div style={{zIndex:999999}}>
          <a href="/"><img src={logo} alt="" className='logo-img'/></a>
            
        </div>
        <div className="options" style={{zIndex:999999}}>
            <ul>
                <li>
                    
                <div><span style={{fontSize:14}}>00</span> </div>
                    <Link to="/" onMouseOver={soundfun}>HOME</Link>
                </li>
                <li>
                    <div><span style={{fontSize:14}}>01</span> </div>
                    <Link to="/purpose" onMouseOver={soundfun}>PURPOSE</Link>
                </li>
                <li>
                    <div><span style={{fontSize:14}}>02</span> </div>
                    <Link to="/features" onMouseOver={soundfun}>Features</Link>
                </li>
                <li>
                    <div><span style={{fontSize:14}}>03</span> </div>
                    <Link to="/faq" onMouseOver={soundfun}>FAQ</Link>
                </li>
                <li>
                    <div><span style={{fontSize:14}}>04</span> </div>
                    <Link to="/contactus" onMouseOver={soundfun}>CONTACT US</Link>
                </li>
                <li>
                    <div ><span className='logged-in' style={{fontSize:14}}>05</span> </div>
                    <Link className='logged-in' to="/todo-space" onMouseOver={soundfun}>TODO SPACE</Link>
                </li>
            </ul>
        </div>
        <div>
            <button className='logged-out' onClick={signInWithGoogle}>Sign In</button>
            <button className='logged-in' onClick={logout} >Log Out</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
