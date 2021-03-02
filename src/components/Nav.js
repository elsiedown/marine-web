import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <ul className="navbar">
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/coaching"><li>Coaching</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
    </ul>)
}

export default Nav