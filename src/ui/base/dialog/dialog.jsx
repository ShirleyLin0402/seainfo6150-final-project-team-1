import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import metrics from '../metrics/metrics.module.css';
import styles from './dialog.module.css';
const smallBreakpoint = parseInt(metrics.smallBreakpoint);

const SheetDialog = memo(({ children }) => (
  <div className={styles.sheet}>
    {children}
  </div>
));

const ModalDialog = memo(({ children, onBackgroundClicked }) => (
  <div className={styles.modalOuter} onClick={onBackgroundClicked}>
    <div className={styles.modalInner}>
      {children}
    </div>
  </div>
));

ModalDialog.propTypes = {
  onBackgroundClicked: PropTypes.func,
};

export const Dialog = memo(({ children, onBackgroundClicked }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return window.innerWidth >= smallBreakpoint
    ? <ModalDialog children={children} onBackgroundClicked={onBackgroundClicked}/>
    : <SheetDialog children={children}/>
});

ModalDialog.propTypes = {
  onBackgroundClicked: PropTypes.func,
};
