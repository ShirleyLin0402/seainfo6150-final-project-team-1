import PropTypes from "prop-types"
import React from "react"
import styles from './Footer.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const Footer = ({ siteTitle }) => (
  <footer className={styles.siteheader}>

    <div className={styles.container}>
      <div className="row">
        <div className="col-sm-12 col-md-8 align-self-center">
          <nav>
            <ul className={styles.navbar}>
            <li className="nav-item">
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li className="nav-item">
                <Link to="/ContactUs">Contact Us</Link>
              </li>
            <li className={styles.newsletter}>
              <div className="newsletter">
              Join Our Mailing List!
              </div>
              <div>
                  <input type="text" email="email" />
              </div>
              <div>
                  <button type="send">Submit</button>
              </div>

            </li>
            </ul>
        </nav>
        </div>
      </div>
    </div>

  </footer >
)


export default Footer
