import React, { Component } from 'react'
import styles from './nav-bar.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

var timer = null;
class NavBar extends Component {

    componentDidMount() {
        window.onscroll = function () {
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            const top_view = document.getElementById('top_view');
            const menu_btn = document.getElementById('menu_btn');
            if (top_view !== null && menu_btn !== null) {
                top_view.style.display = t >= 200 ? 'block' : 'none';
                menu_btn.style.display = t >= 200 ? 'block' : 'none';
            }
        };
    }
    
    scrollToTop = () => {
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn(){
            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(oTop > 0){
                window.scrollTo(0,oTop-50);
                timer = requestAnimationFrame(fn);
            }else{
                cancelAnimationFrame(timer);
            }    
        });
        // window.scrollTo(0, 0);
    };
 

    render() {
      return (
        <div className={styles.nav_wrapper}>
            <div>
                <div className={styles.top_btn} id="top_view" onClick={this.scrollToTop}><span>TOP</span></div>
            </div>
            <nav className={styles.menu} id="menu_btn">
                <div className={styles.pattern}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={styles.menu_list}>
                    <li className={styles.menu_item}>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/flavors">Flavors</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/shop">Online Shopping</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/contact">About Us</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
      );
    }
  }
  
  
export default NavBar;