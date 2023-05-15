import React from 'react'
import "../styles/Faq.css"

function Faq() {
  return (
    <div>
      <section>
        <div className='uppersection'>
            <div className='num-03'>
                <p>03</p>
            </div>
            <div className='heading-1'>
                <h1>YOUR QUESTIONS, ANSWERED.</h1>
            </div>
            <div className='what-is'>
                <h1>WHAT IS....</h1>
            </div>
        </div>

        <div className="lowersection">
            <div className='grid-div'>
                <h1>Security Level of this application?</h1>
                <p>As the authentication is based on Google, its way more secure than normal login websites</p>
            </div>
            <div className='grid-div'>
                <h1>Number of tasks we can add?</h1>
                <p>You can add infinite number of tasks</p>
            </div>
            <div className='grid-div'>
                <h1>how to mark the task completed?</h1>
                <p>For now, you can click on the star icon to mark it as completed</p>
            </div>
            <div className='grid-div'>
                <h1>Why the images are loading slowly</h1>
                <p>As the website contains heavier elements, it mostly takes 2 to 3 seconds to load them on your browser window</p>
            </div>
            <div className='grid-div'>
                <h1>Can a person who is not signed in can access the application?</h1>
                <p>No, absolutely not. It requires your email address in order to store your tasks and re-fetch it.</p>
            </div>
            <div className='grid-div'>
                <h1>Can any third party can access our tasks?</h1>
                <p>We ensure at most priority to security, so it won't happen at any cost.</p>
            </div>
        </div>
        

      </section>
    </div>
  )
}

export default Faq
