import React from 'react'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './Home.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header />
            <div className = {styles.topbackground}>
            <img src="/images/background.png" alt="background" width="100%" height="100%"/>
            </div>

            <div className={styles.boxes}>
            <div className = {styles.box1}>
            <div className={styles.Container}>
              <img className={styles.homepage1} src="images/homepage1.jpeg" alt="flavor" />
            </div>
            <h4>Check Out Flavors!</h4>
            <p>
            Each cake is carefully handcrafted from the freshest, most complimentary ingredients in order to present the flavors in their natural essence.
            </p>
            <div className={styles.homebutton}>
            <Link to="/Flavor">Check Flavors</Link>
            </div>
            </div>

            <div className = {styles.box2}>
            <div className={styles.Container}>
              <img className={styles.homepage2} src="images/homepage2.jpeg" alt="flavor" />
            </div>
            <h4>About Us</h4>
            <p>
            Since opening our first shop in 1981, we have kept our commitment to offer our customers only freshly baked cakes that have not been pre-frozen.
            </p>
            <div className={styles.homebutton}>
            <Link to="/AboutUs">About Us</Link>
            </div>
            </div>

            <div className = {styles.box3}>
            <div className={styles.Container}>
              <img className={styles.homepage3} src="images/homepage3.jpeg" alt="shopping" />
            </div>
            <h4>Shop</h4>
            <p>
            Treat Friends and family wth a trip to the shop with one of our seasonal gift cards!
            </p>
            <div className={styles.homebutton}>
            <Link to="/OnlineShopping">Go to Shop</Link>
            </div>
            </div>

            </div>
            <Footer />

        </div>
    )
}

export default Home
