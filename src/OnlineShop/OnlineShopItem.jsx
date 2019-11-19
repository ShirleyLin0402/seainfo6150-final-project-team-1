import React from "react";
import PropTypes from 'prop-types'
import styles from './OnlineShopItem.module.css'

const OnlineShopItem = props => {
  return (
        <div className={styles.wrapper}>
            <div className={styles.img_wrapper}>
                <img className={styles.img} alt={props.item.title} src={props.item.image.url} />
            </div>
            <h4 className={styles.product_name}>
                {props.item.title}
                <p className={styles.detail_desc}>{props.item.description}</p>
            </h4>
            <p className={styles.product_price}>{props.item.price}</p>
            <button class={styles.buy_button} onClick={() => alert(`${props.item.description}`)}>Buy Now</button>
        </div>
  );
};

OnlineShopItem.propTypes = {
  item: PropTypes.array.isRequired
};
export default OnlineShopItem;
