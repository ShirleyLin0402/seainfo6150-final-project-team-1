import PropTypes from "prop-types"
import React from "react"
import styles from './Header.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const Header = ({ siteTitle }) => (
  <header className={styles.siteheader}>

    <div className={styles.container}>
      <div className="row">
        <div className="col-sm-12 col-md-8 align-self-center">
          <nav>
            <ul className={styles.navbar}>
              <li className="nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Flavors">Flavors</Link>
              </li>
              <li className="nav-item">
                <Link to="/store">Online shopping</Link>
              </li>
              <li className="col-sm-12 col-md-4 align-self-center">
                <img className={styles.image} src="images/logo.png" alt="logo" />
              </li>
              <li className="nav-item">
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/ContactUs">Contact Us</Link>
              </li>
            </ul>

          </nav>
        </div>
      </div>
    </div>

  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
