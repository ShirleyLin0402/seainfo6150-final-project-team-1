import React from "react";
import PropTypes from 'prop-types'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import OnlineShopItem from "./OnlineShopItem"
import styles from './OnlineShop.module.css'

const OnlineShop = props => {
  return (
      <div className={styles.outter_wrapper}>
        <Header />
        <ul className={styles.feedlist}>
        {props.item.map(item => (
            <li className={styles.list} key={item.id}><OnlineShopItem item={item}/></li>
        ))}
        </ul>
        <NavBar />
        <Footer />
      </div>
  );
};

OnlineShop.propTypes = {
  item: PropTypes.array.isRequired
};
export default OnlineShop;
