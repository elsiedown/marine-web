import React from 'react'
// import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <a href="/"><h1 className="title">Talk with Marina</h1></a>
      <ul className="navbar">
      <a href="/contact"><i class="far fa-envelope"></i></a>
        <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/coaching"><li>Work With Me</li></a>
        <a href="/contact"><li>Contact</li></a>
      </ul>
      {/* <a href="/"><h1 className="title">Talk with Marina</h1></a> */}
    </>
  )
}

export default Nav