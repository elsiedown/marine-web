import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

import instaone from '../assets/insta-one.jpg'
import instatwo from '../assets/insta-two.jpg'
import instathree from '../assets/insta-three.jpg'

function Insta() {
  return (
    <section className="insta">
      <h1>Join me on Insta</h1>
      <a href="https://www.instagram.com/talkwithmarina/"><p>@talkwithmarina</p></a>
        <InstagramEmbed
          url='https://instagr.am/p/Zw9o4/'
          clientAccessToken='123|456'
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />
        <div className="instagram-grid">
        <a href="https://www.instagram.com/talkwithmarina/"><img src={instaone} alt="insta"></img></a>
        <a href="https://www.instagram.com/talkwithmarina/"><img src={instatwo} alt="insta"></img></a>
        <a href="https://www.instagram.com/talkwithmarina/"><img src={instathree} alt="insta"></img></a>
        </div>
    </section>
  )

}

export default Insta