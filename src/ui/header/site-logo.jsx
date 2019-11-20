import React, { memo } from 'react';
import styles from './site-logo.module.css';

const LOGO_SRC = "/images/logo.png";

export const SiteLogo = memo(() => (
  <img
    className={styles.logo}
    src={LOGO_SRC}
    alt="site-logo"
  />
));
