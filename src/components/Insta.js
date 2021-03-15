import React from 'react'
import axios from 'axios'
// import InstagramEmbed from 'react-instagram-embed'

import instaone from '../assets/insta-one.jpg'
import instatwo from '../assets/insta-two.jpg'
import instathree from '../assets/insta-three.jpg'

function Insta() {

  // const [photos, setPhotos] = React.useState('')

  const instaToken = process.env.REACT_APP_MY_API_KEY

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${instaToken}`)
        setPhotos(data)
        console.log(data[0])
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [instaToken])

  const [photos, setPhotos] = React.useState('')
  const insta = photos.data
 

  // const instaPhotos = photos

 

  return (
    <section className="insta">
      <h1>Join me on Insta</h1>
      <>
        {insta ?
          <>
            <a href={"https://www.instagram.com/talkwithmarina/"}><p>@talkwithmarina</p></a>
            <div className="instagram-grid">
              <a href="https://www.instagram.com/talkwithmarina/"><img src={insta[0] ? insta[0].media_url : instaone} alt="insta"></img></a>
              <a href="https://www.instagram.com/talkwithmarina/"><img src={insta[1] ? insta[1].media_url : instatwo}  alt="insta"></img></a>
              <a href="https://www.instagram.com/talkwithmarina/"><img src={insta[2] ? insta[2].media_url : instathree}  alt="insta"></img></a>
            </div>
            
          </>
          :
          <>
            ''
          </>
        }
      </>
    </section>
  )

}

export default Insta