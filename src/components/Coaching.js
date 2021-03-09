import React from 'react'
import { Link } from 'react-router-dom'

function Coaching() {
  return (
    <>
      {/* <h1>Coaching</h1> */}
      <div className="approach">
        <h1>Approach</h1>
        <div className="approach-text">
          <p>I work with people who find it difficult to feel heard, have low self-esteem, and/or are experiencing a lack of drive or a feeling purpose in their lives. I know that life can feel like a scary, intense and demanding place especially during what are meant to be the ‘best years’.</p>
          <p>Together, we will create a game plan by focusing on short term, medium term, and long term goals. The aim of these goals is to guide you towards self-empowerment that will help you feel more in control and less overwhelmed.</p>
          <p>My style of coaching is about positive change and clarity but I promise it’s not always so serious. When appropriate, I also aim to bring a bit of humour to the process.</p>
        </div>
      </div>
      <div className="next-steps">
        <h1>What's Next?</h1>
        <div className="steps-text">
          <p className="step"><span>Step 1</span> - Get in Touch</p>
          <p>Get in touch with me via our <Link to="/contact">contact page</Link>.</p>
          <p className="step"><span>Step 2</span> - Fill out the enquiry form (2-3 minutes)</p>
          <p>I will then send you a form. The form will ask questions about your current situation, your goals, what you would like to get out of life coaching and possible barriers in your way.</p>
          <p className="step"><span>Step 3 -</span> Free introductory call (30 minutes)</p>
          <p>In this call we can get to know eachother better, discuss an initial focus for our sessions, and I’ll give you a sense of what to expect.</p>
          <p className="step"><span>Step 4 - </span>Confirm next steps and an initial plan</p>
          <p>Once you have confirmed you’d like to proceed with coaching we will create a programme that suits you.</p>
        </div>
      </div>


    </>
  )
}

export default Coaching