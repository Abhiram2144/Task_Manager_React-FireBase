import React, {useEffect, useState} from 'react'
import pianoBG from '../audio/piano-bg.wav'
import "../styles/Footer.css"


function Footer() {
  const [music, setToggle] = useState(true)
  const audio = new Audio(pianoBG);
  audio.volume = 0.2

  // const playMusic = () => {
  //   // setToggle(!music)
  //   if(music) {
  //     audio.play();
  //     setToggle(false);
      
  //   } else {
  //     audio.pause();
  //     setToggle(true);
  //   }
  // }


 const toggle = () =>{
  return audio.paused? audio.play() : audio.pause();
 }

 

  

  return (
    <div>
      <footer>
        <div className='clg'>
            <h1> <a href="https://www.cuchd.in/"  target="_blank">CHANDIGARH UNIVERSITY</a></h1>
        </div>
        <div className='branch'>
          <button id="bgm" onClick={toggle}>
            {audio.played ? "🔊":"🔇" }
          </button>
        </div>
        <div className='branch'>CSE</div>
      </footer>
    </div>
  )
}

export default Footer
