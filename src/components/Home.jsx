import React from 'react'
import "../styles/Home.css"

function Home() {
  return (
    <div>
      <section style={{zIndex:10}}>
        <div className='container'>

        <div className='head-cont'>
          <p style={{display:'flex', flexDirection:'row'}}> <p className='num-00' >00</p>  <span className='head-title' style={{textIndent:24}}>TODO-SPACE</span></p>
        </div>

        <div className='description'>
            <p className='description-line md-lg' id="fline">Perfection needs Discipline. And Discipline needs?</p>
            <p  className='description-line md-lg' id="sline">In order to be successfull, one should have discipline </p>
            <p className='description-line' id="tline">Our goal is to provide you what it takes to be successfull</p>
            <p className='description-line' id="fourline">Todo Space is the one of the best Task Manager out there!</p>
        </div>
        </div>
       
      </section>

      
      
    </div>
  )
}

export default Home
