import React from 'react'
import { Link } from 'react-router-dom'
import marina from '../assets/marina-two.jpeg'
import Insta from './Insta'

function About() {
  return (
    <>
      <section className="about">
        <div className="about-info-main">
        <div className="about-info">
          <div>
            <h1>About</h1>
            <p>Hello, my name is Marina. I am a mindset coach, mentor, and personal development devotee. I love using my skills to help my clients gain clarity, confidence and purpose.</p>
            <p>I primarily work with women in their 20s and 30s who want to gain greater clarity in life, boost their self esteem, create a sense of balance and develop a better understanding of themselves and what drives them.</p>
            <p>This coaching practice is for women who want to take back control and empower themselves.</p>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>Human Development & Practical Emotional Intelligence, iDiscover 360</li>
              <li>Certified Transformational Life Coach, Animas (in training)</li>
            </ul>
          </div>
        </div>
        <div className="image-section">
          <img src={marina} alt="marina-logo"></img>
        </div>
        </div>
        <div className="contact-button">
          <Link to="/contact"><p>Get in Touch</p></Link>
        </div>
      </section>
      <Insta />
    </>
  )
}

export default About