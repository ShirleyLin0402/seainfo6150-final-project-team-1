import React from 'react'
import styles from './AboutUs.module.css';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const AboutUs = () => {
    return (

      <div>
        <Header />
      <h2>About Us</h2>
      <div className={styles.sectitle}>
      <p>
      "Ever since we started, <br></br>
      our one and only wish has been to make our customers say “DELICIOUS!” from the bottom of their hearts."
      </p>
      </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="images/AboutUs.jpg" alt="CakeShop" />
        </div>
        <div className={styles.content}>
        <p>HARBS is a café born in Japan, pursuing freshness and hand-made quality above all else. Ever since we started, our one and only wish has been to make our customers say “DELICIOUS!” from the bottom of their hearts. We hope you savor every moment of joy you experience here at HARBS.

        </p>
        <div className={styles.imageContainer}>
          <img className={styles.image2} src="images/mengbulang.jpg" alt="蒙布朗" />
        </div>
        <h3>Cakes that can fill your heart with happiness</h3>
        <p>
        What kind of cake can fill your heart with happiness when you eat it whole?<br></br>
        This question was the starting point for HARBS.<br></br>
        We were particular about size 8 (24cm)<br></br>
        because we pursued satisfaction of the heart.<br></br>
        We studied the levels of sweetness and fluffiness, and the nature of the ingredients, and finally arrived at the ideal recipe.<br></br>
        Our cake is big but delicious, so even a lady can eat it whole. <br></br>
        That’s the HARBS cake.<br></br>
        We want you to enjoy the happy feeling when you eat the whole cake.<br></br>
        </p>

        <div className={styles.imageContainer}>
          <img className={styles.image3} src="images/harbsfruit.jpg" alt="fruit" />
        </div>
        <h3>Never Frozen</h3>
        <p>
        There are many HARBS stores now,<br></br>
        but we have not changed the handmade process at all.<br></br>
        In order to bring freshly made flavors to our customers,<br></br>
        our cakes are never frozen.<br></br>
        We make only as many cakes as we sell, each hand made, and deliver them to our stores by our own delivery system from our own factories strategically located nearby for freshness.<br></br>
        In order to prevent deterioration which starts as soon as a cake is cut,<br></br>
        our cakes are kept whole in cases and sliced one piece at a time as orders are placed.<br></br>
        All this because we want to deliver the freshest products to our customers.
        </p>

        <div className={styles.imageContainer}>
          <img className={styles.image4} src="images/cake3.jpg" alt="cake3" />
        </div>
        <h3>High Cost Rate</h3>
        <p>
        We do not compromise on the ingredients to make delicious products.<br></br>
        But we cannot raise prices without limit.<br></br>
        This results in cakes with high cost rate. <br></br>
        For customer satisfaction, we will deliver delicious flavors even if we disregard profit at times.<br></br>
        HARBS has no intention of changing this policy now or in the future.
        </p>
        </div>
        <Footer />
      </div>


    )
}

export default AboutUs
