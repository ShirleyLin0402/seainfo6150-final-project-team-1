import React from 'react'
import styles from './ContactUs.module.css';
import Header from "../Header/Header";

const ContactUs = () => {
  return (

              <div className="Contact-us">
              <Header />
                  <div className={styles.container}>

                          <div>
                              <label>Your Name: </label>
                                <br></br>
                              <input type="text" name="name" />
                          </div>
                          <div>
                              <label>Your Email: </label>
                                <br></br>
                              <input type="email" name="email" />
                          </div>
                          <div>
                              <message>Message: </message>
                              <br></br>
                              <textarea name="message"></textarea>
                          </div>
                          <div>
                              <button type="submit">Send</button>
                          </div>

                  </div>
              </div>

      )
  }


export default ContactUs
