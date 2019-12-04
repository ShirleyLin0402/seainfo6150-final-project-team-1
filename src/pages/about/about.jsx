import React, { memo } from 'react';
import { Page } from '../../ui/base/page-container/page-container';
import NavBar from '../../nav/nav-bar';
import styles from './about.module.css';

export const About = () => {
    return (
         <div className={styles.div}>

            <br></br>
            <br></br>
            <h1 className={styles.header}>
            About our restaurant<br/>
            <br></br>
            </h1>

            <p className={styles.begin}>
                "Ever since we started, <br></br>
                our one and only wish has been to make our customers say “DELICIOUS!” from the bottom of their hearts."
            </p>
            <br></br>
            <br></br>
            <figure>
            <img className={styles.img} src="/images/AboutUs.jpg" alt="CakeShop"/>
            </figure>

            <br></br>
            <br></br>
            <br></br>

            <p className={styles.text}>
            HARBS is a café born in Japan, <br></br>
            pursuing freshness and hand-made quality above all else. <br></br>
            Ever since we started, <br></br>
            our one and only wish has been to make our customers say “DELICIOUS!” from the bottom of their hearts.  <br></br>
            We hope you savor every moment of joy you experience here at HARBS.
            </p>
            <br></br>
            <br></br>
            <figure>
            <img className={styles.img} src="/images/mengbulang.jpg" alt="mengbulang"/>
            </figure>
            <br></br>
            <br></br>

            <h1 className={styles.header}>
            Cakes that can fill your heart with happiness
            </h1>
            <br></br>
            <br></br>

            <p className={styles.text}>
            What kind of cake can fill your heart with happiness when you eat it whole?<br></br>
            This question was the starting point for HARBS.<br></br>
            We were particular about size 8 (24cm)<br></br>
            because we pursued satisfaction of the heart.<br></br>
            We studied the levels of sweetness and fluffiness, <br></br>
            and the nature of the ingredients, and finally arrived at the ideal recipe.<br></br>
            Our cake is big but delicious, so even a lady can eat it whole. <br></br>
            That’s the HARBS cake.<br></br>
            We want you to enjoy the happy feeling when you eat the whole cake.<br></br>
            </p>

            <br></br>
            <br></br>
            <figure>
            <img className={styles.img} src="/images/harbsfruit.jpg" alt="harbsfruit"/>
            </figure>
            <br></br>
            <br></br>
            <h1 className={styles.header}>
                Never Frozen<br/>
            </h1>
            <br></br>
            <br></br>
             <p className={styles.text}>
             There are many HARBS stores now,<br></br>
             but we have not changed the handmade process at all.<br></br>
             In order to bring freshly made flavors to our customers,<br></br>
             our cakes are never frozen.<br></br>
             We make only as many cakes as we sell, each hand made, <br></br>
             and deliver them to our stores by our own delivery system from our own factories strategically located nearby for freshness.<br></br>
             In order to prevent deterioration which starts as soon as a cake is cut,<br></br>
             our cakes are kept whole in cases and sliced one piece at a time as orders are placed.<br></br>
             All this because we want to deliver the freshest products to our customers.
             </p>

           <br></br>
            <br></br>
            <figure>
            <img className={styles.img} src="/images/cake3.jpg" alt="cake3"/>
            </figure>
            <br></br>
            <br></br>
            <h1 className={styles.header}>
                High Cost Rate<br/>
            </h1>
            <br></br>
            <br></br>
            <p className={styles.text}>
            We do not compromise on the ingredients to make delicious products.<br></br>
            But we cannot raise prices without limit.<br></br>
            This results in cakes with high cost rate. <br></br>
            For customer satisfaction, we will deliver delicious flavors even if we disregard profit at times.<br></br>
            HARBS has no intention of changing this policy now or in the future.
            </p>
            <br></br>
            <NavBar/>
        </div>
    )
}
