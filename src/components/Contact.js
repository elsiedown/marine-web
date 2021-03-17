import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import { Form, Button } from 'semantic-ui-react'

function Contact() {


  const { register, errors, handleSubmit, reset } = useForm();



  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data, event) => {
    event.preventDefault()
    try {
      const templateParams = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        message: data.message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <div className="contact">
      <div className="contact-form">
        <h1>Get in Touch</h1>
        <p>Please fill out the below form and I will be in touch as soon as possible to arrange the next steps.</p>
        <div className="form-section">

          <form className="column is-offset" onSubmit={handleSubmit(onSubmit)}>
            <div className="names">
              <div className="field">
                <label className="label">First Name *</label>
                <div className="control">
                  <input
                    className={`input`}
                    placeholder="First Name"
                    name="firstname"
                    ref={register({
                      required: { value: true, message: 'Please enter your name' },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })}

                  />
                  {errors.firstname && <span className='errorMessage'>{errors.firstname.message}</span>}
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name (Optional)</label>
                <div className="control">
                  <input
                    className={`input `}
                    placeholder="Last Name"
                    name="lastname"
                    ref={register({
                      required: false,
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="names">
              <div className="field">
                <label className="label">Email *</label>
                <div className="control">
                  <input
                    className={`input`}
                    placeholder="Email"
                    ref={register({
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                    name="email"

                  />
                   {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                </div>
              </div>
              <div className="field">
                <label className="label">Phone Number (Optional)</label>
                <div className="control">
                  <input
                    className={`input `}
                    placeholder="Phone Number"
                    ref={register({
                      required: false,
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })}
                    name="phone"

                  />
                </div>
              </div>
            </div>

            <div className="is-fullwidth">
              <label className="label">Message *</label>
              <div className="control is-fullwidth">
                <textarea
                  className='input is-fullwidth'
                  placeholder="Your Message"
                  type="textarea"
                  rows={4}
                  ref={register({
                    required: true
                  })}
                  name="message"

                />
                {errors.message && <span className='errorMessage'>Please enter a message</span>}
              </div>
            </div>
            <div className="field field-button">
              <button type="submit" className="button"  >Send</button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Contact