import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <ul className="navbar">
      <Link to="/contact"><i class="far fa-envelope"></i></Link>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/coaching"><li>Work With Me</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
      <Link to="/"><h1 className="title">Talk with Marina</h1></Link>
    </>
  )
}

export default Nav