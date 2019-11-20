import React, { memo } from 'react';
import { List } from '../base/list/list';
import { InternalLink } from '../base/link/link';
import { SiteLogo } from './site-logo';
import styles from './header.module.css';

const itemProps = [
  { href: '/home', text: 'Home' },
  { href: '/flavors', text: 'Flavors' },
  { href: '/shop', text: 'Shop' },
  { href: '/about', text: 'About'},
  { href: '/contact', text: 'Contact'}
]
const items = itemProps.map(({ href, text }, idx) => ({
  Component: () => (
    <InternalLink
      href={href}
      className={styles.link}
      activeClassName={styles.activeLink}
      title={text}
    >
      {text}
    </InternalLink>
  ),
  className: idx > 2 ? styles.optionalItem : undefined,
}));

export const Header = memo(() => (
  <header className={styles.header}>
    <div className={styles.logoWrapper}>
      <SiteLogo/>
    </div>
    <nav>
      <List
        items={items}
        className={styles.list}
      />
    </nav>
  </header>
));
