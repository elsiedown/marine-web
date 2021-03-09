import React from 'react'
import { Link } from 'react-router-dom'
import marina from '../assets/marina-one.jpeg'



import Testimonials from './Testimonials'
import Insta from './Insta'

function Home() {
  return (
    <>
      <div className="home-intro">
        <img src={marina} alt="marina-logo"></img>
        <div className="intro-text">
          <p>Hello, my name is Marina. <br></br>I am a mindset coach, mentor, and personal development devotee. I love using my skills to help my clients gain clarity, confidence and purpose.</p>
        </div>
      </div>
      <Testimonials />
      <div className="home-intro">
        <div className="contact-button">
          <Link to="/contact"><p>Get in Touch</p></Link>
        </div>
      </div>
      <Insta />
    </>
  )
}

export default Home