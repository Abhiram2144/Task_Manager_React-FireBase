import React from 'react'
import "../styles/Home.css"

function Home() {
  return (
    <div>
      <section style={{zIndex:10}}>
        <div className='container'>

        <div className='head-cont'>
          <p style={{display:'flex', flexDirection:'row'}}> <p style={{fontSize:40, color:'#DDBF1B'}}>00</p>  <h1 className='head-title' style={{textIndent:24}}>TODO-SPACE</h1></p>
        </div>

        <div className='description'>
            <p style={{textIndent:0}} className='description-line'>Perfection needs Discipline. And Discipline needs?</p>
            <p style={{textIndent:40}} className='description-line'>In order to be successfull, one should have discipline </p>
            <p style={{textIndent:80}} className='description-line'>Our goal is to provide you what it takes to be successfull</p>
            <p style={{textIndent:120}} className='description-line'>Todo Space is the one of the best Task Manager out there!</p>
        </div>
        </div>
       
      </section>

      
      
    </div>
  )
}

export default Home
