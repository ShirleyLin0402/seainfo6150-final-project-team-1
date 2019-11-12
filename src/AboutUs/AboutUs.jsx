import React from 'react'
import styles from './AboutUs.module.css';


const AboutUs = () => {
    return (
        <div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="images/AboutUs.jpg" alt="CakeShop" />
          /*<div className={styles.textOnImage}>Established in 2019, our cake shop produce lots of interesting flavors</div>*/
</div>
<div className={styles.content}>
  <p>Lark Cake Shop opened in 2007 on an (at the time) unlikely stretch of Sunset Blvd. We started with the idea of baking cakes, cupcakes, cookies, pies and bars that would be inspired by the bohemian modern esthetic of Silver Lake. The “look” of our baked goods would be stylized and simple, refined yet interesting. The taste; delicious and homemade. In 2015, we added a second location in the Historic Highlands neighborhood of Pasadena. The neighborhood has welcomed us with open arms and we look forward to becoming an even bigger part of the community each and every year.
</p>
<p>
We specialize in the rich, sweet and delicious. Whenever possible we use the freshest locally produced or distributed ingredients in our products. We crack our own eggs every day. We do not use liquid eggs or other food service shortcuts. We use top of the line gourmet ingredients in all our recipes. Our dairy supplier is the Challenge Dairy Cooperative, a cooperative of more than 600 California dairies. We try to minimize our environmental footprint by using compostable cups, clamshell boxes, utensils and straws. We also use paper bags and boxes whenever possible.
</p>
<p>
Family owned and operated, Lark Cake Shop is committed to serving the finest baked goods available and providing unmatched customer service. We look forward serving you!
</p>
</div>
        </div>
    )
}

export default AboutUs
