import React, { memo } from 'react';
import { NewsLetterForm } from './newsletter-form/newsletter-form';
import { InternalLink } from '../base/link/link';
import { List } from '../base/list/list';
import styles from './footer.module.css';

const itemProps = [
  { href: '/about', text: 'About Us' },
  { href: '/contact', text: 'Contact Us' },
]
const items = itemProps.map(({ href, text }) => ({
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
}));

export const Footer = memo(() => (
  <footer className={styles.footer}>
    <nav className={styles.nav}>
      <List
        items={items}
        className={styles.list}
      />
    </nav>
    <NewsLetterForm/>
  </footer>
));
