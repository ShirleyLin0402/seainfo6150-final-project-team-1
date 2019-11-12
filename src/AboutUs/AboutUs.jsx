import React from 'react'
import styles from './AboutUs.module.css';


const AboutUs = () => {
    return (
        <div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="images/campus1.jpg" alt="Campus" />
          <div className={styles.textOnImage}>Established in 1936, Seattle Technological University <br />is the oldest
  institution of higher education in Seattle</div>
</div>
<div className={styles.content}>
  <p>Seattle Technological University is devoted to excellence in teaching,
  learning, and research, and to developing leaders in many disciplines who
  make a difference globally. We have an enrollment of over <strong>20,000</strong> degree
  candidates, including undergraduate, graduate, and professional students.
  We have more than <strong>360,000</strong> alumni around the world.</p>
  <p>Our faculty are engaged with teaching and research to push the boundaries
  of human knowledge. For students who are excited to investigate the
  biggest issues of the 21st century, we offer an unparalleled student
  experience and a generous financial aid program, with over <strong>$160 million </strong>
  awarded to more than <strong>60%</strong> of our undergraduate students. We have six
  degree-granting Schools, offering a truly global education.</p>
</div>
        </div>
    )
}

export default AboutUs
