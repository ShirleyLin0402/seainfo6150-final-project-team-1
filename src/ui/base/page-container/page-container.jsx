import classnames from 'classnames';
import React, { memo } from 'react';
import styles from './page-container.module.css';

export const Page = memo(({ children, modalOpen }) => (
  <main className={classnames(styles.page, {
    [styles.modalOpen]: modalOpen,
  })}>
    {children}
  </main>
));
