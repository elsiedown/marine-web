import React from 'react'
import { Link } from 'react-router-dom'
import marina from '../assets/marina-one.jpeg'



import Testimonials from './Testimonials'
import Insta from './Insta'

function Home() {

  // React.useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <>
      <div className="home-intro">
        <img src={marina} alt="marina-logo"></img>
        <div className="intro-text">
          <p>I am a mindset coach who helps driven and ambitious people looking for direction, balance and a ‘why’ to life. Coaching with me focuses on both the internal and external worlds with the aim for clarity, purpose and balance.</p>
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