import React from 'react';
import { Page } from '../../ui/base/page-container/page-container';
import { TitleLarge, TitleMedium, TextMedium, TitleSmall, TextCaption } from '../../ui/base/typography/typography';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from './result.module.css';

export const Result = () => {
    return (
        <Page>  
            <div className={styles.pageTitle}>
                <TitleLarge text="Order status"/>
            </div>
            <div className={styles.orderStatus}>
                <div className={styles.textwrapper}>
                    <embed src="/images/tick.svg" type="image/svg+xml" className={styles.checkMark}/>
                    <TitleMedium text="Succeed!" className={styles.text}/>
                </div>
                <TextMedium text="Thank you! You order has been placed." />
            </div>
            <div className={styles.btn}>
                <Link to="/shop">Continue Shopping</Link>
            </div>
            
        </Page>
    )
}