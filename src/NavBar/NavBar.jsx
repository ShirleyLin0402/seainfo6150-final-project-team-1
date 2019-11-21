import React, { Component } from 'react'
import styles from './NavBar.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

var timer = null;
class NavBar extends Component {

    componentDidMount() {
        window.onscroll = function () {
            // t是滚动条滚动时,到顶部的距离
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
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/Flavors">Flavors</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/store">Online Shopping</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
      );
    }
  }
  
  
export default NavBar;
  

// const NavBar = () => {
//     return (
//         <div className={styles.nav_wrapper}>
//             <div className={styles.to_top}><button onClick="scrollTo(0,0)">TOP</button></div>
//             <nav className={styles.menu}>
//                 <ul className={styles.menu_list}>
//                     <li className={styles.menu_item}>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li className={styles.menu_item}>
//                         <Link to="/Flavors">Flavors</Link>
//                     </li>
//                     <li className={styles.menu_item}>
//                         <Link to="/store">Shopping</Link>
//                     </li>
//                     <li className={styles.menu_item}>
//                         <Link to="/AboutUs">About</Link>
//                     </li>
//                     <li className={styles.menu_item}>
//                         <Link to="/ContactUs">Contact</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }




// export default NavBar;
