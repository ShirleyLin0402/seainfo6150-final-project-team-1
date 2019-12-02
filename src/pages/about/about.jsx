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
            <br></br>
            </h1>

            <img src="/images/homepage1.jpeg" alt="about1"/>
            <br></br>
            <br></br>
            <br></br>
            <img src="/images/homepage2.jpeg" alt="about2"/>
            <br></br>
            <br></br>
            <br></br>
            <img src="/images/homepage3.jpeg" alt="about3"/>

            <br></br>
            <br></br>
            <br></br>
            <p className={styles.text}>
                  Our mission is to make the world better, one scoop at a time as a multigenerational gathering place with sustainability and happiness at the core of all we do. The world is a big place, made smaller, we believe, by the act of sharing a sweet treat with someone you love. Our team works hard to create deliciousness by partnering with local farmers and producers — from jam-makers and beekeepers to strawberry farmers and coffee roasters — to turn the best, freshest, most creative local flavors into truly outstanding cake.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className={styles.header}>
                About us<br/>
            </h1>

            <br></br>
            <br></br>
            <p className={styles.text}>

                We are team 1.<br/>
                We hope you enjoy our website!<br/><br/><br/>
            </p>
            <NavBar/>
        </div>
    )
}
