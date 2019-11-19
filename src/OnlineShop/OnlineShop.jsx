import React from "react";
import PropTypes from 'prop-types'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OnlineShopItem from "./OnlineShopItem"
import styles from './OnlineShop.module.css'

const OnlineShop = props => {
  return (
      <div>
        <Header />
            <ul class={styles.feedlist}>
            {props.online_data.map(item => (
                <li class={styles.list} key={item.id}><OnlineShopItem item={item}/></li>
            ))}
            </ul>
        <Footer />
      </div>
  );
};

OnlineShop.propTypes = {
  item: PropTypes.array.isRequired
};
export default OnlineShop;
