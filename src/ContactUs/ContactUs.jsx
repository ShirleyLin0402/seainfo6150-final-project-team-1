import React from 'react'
import styles from './ContactUs.module.css';


const ContactUs = () => {
  return (


              <div className="Contact-us">
                  <div className="container">
                      {/* To make form work, use your own formspree credentials in action="" */}
                      <form action="https://formspree.io/youremail@domain.com" method="POST" name="contact">
                          <div>
                              <label>Your Name: </label>
                              <input type="text" name="name" />
                          </div>
                          <div>
                              <label>Your Email: </label>
                              <input type="email" name="email" />
                          </div>
                          <div>
                              <label>Message: </label>
                              <textarea name="message"></textarea>
                          </div>
                          <div>
                              <button type="submit">Send</button>
                          </div>
                      </form>
                  </div>
              </div>

      )
  }


export default ContactUs
