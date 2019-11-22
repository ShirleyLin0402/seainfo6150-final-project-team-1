import React, { memo } from 'react';
import styles from './home.module.css';
import { Page } from '../../ui/base/page-container/page-container';
import { Sections } from './sections/sections';
import NavBar from '../../nav/nav-bar';

const BACKGROUND_IMG_SMALL = "/images/harbs.jpeg"

export const Home = memo(() => (
  <Page>
    <img
      className={styles.background}
      src={BACKGROUND_IMG_SMALL}
      alt="home background"
    />
    <Sections/>
    <NavBar />
  </Page>
));
