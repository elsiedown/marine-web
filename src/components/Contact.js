import React from 'react'
// import { Form, Button } from 'semantic-ui-react'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-form">
      <h1>Get in Touch</h1>
      <p>Please fill out the below form and I will be in touch as soon as possible to arrange the next steps.</p>
      <div className="form-section">
      
      <form className="column is-offset">
            <div className="names">
              <div className="field">
              <label className="label">First Name*</label>
              <div className="control">
                <input
                  className={`input`}
                  placeholder="First Name"

                  name="firstname"

                />
              </div>
            </div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className={`input `}
                  placeholder="Password"

                  name="password"
  
                />
              </div>
            </div>
            </div>
            <div className="names">
              <div className="field">
              <label className="label">Email*</label>
              <div className="control">
                <input
                  className={`input`}
                  placeholder="Email"

                  name="firstname"

                />
              </div>
            </div>
            <div className="field">
              <label className="label">Phone Number</label>
              <div className="control">
                <input
                  className={`input `}
                  placeholder="Phone Number"

                  name="password"
  
                />
              </div>
            </div>
            </div>

            <div className="field">
              <label className="label">Message *</label>
              <div className="control">
                <textarea
                  className={`input `}
                  placeholder="Your Message"
type="textarea"
                  name="message"
  
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button">Send</button>
            </div>
          </form>
          </div>
          </div>
    </div>
  )
}

export default Contact