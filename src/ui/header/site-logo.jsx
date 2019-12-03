import React, { memo } from 'react';
import styles from './site-logo.module.css';

const LOGO_SRC = "/images/logo.png";

export const SiteLogo = memo(() => (
  <a href="http://localhost:3000/home">
  <img
    className={styles.logo}
    src={LOGO_SRC}
    alt="site-logo"
  />
  </a>
));
