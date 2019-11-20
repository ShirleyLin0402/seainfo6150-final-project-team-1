import classnames from 'classnames';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const BasicButton = memo(({ children, type, disabled, kind, strentch }) => (
  <button
    type={type}
    disabled={disabled}
    className={classnames(styles[kind], {
      [styles.hoverEnabled]: !disabled,
      [styles.strentch]: strentch
    })}
  >
    {children}
  </button>
));

BasicButton.defaultProps = {
  strentch: false,
  disabled: false,
};

export const SecondaryButton = memo(({ children, type, disabled, strentch }) => (
  <BasicButton
    type={type}
    disabled={disabled}
    strentch={strentch}
    kind="secondary"
  >
    {children}
  </BasicButton>
));


export const PrimaryButton = memo(({ children, type, disabled, strentch }) => (
  <BasicButton
    type={type}
    disabled={disabled}
    strentch={strentch}
    kind="primary"
  >
    {children}
  </BasicButton>
));

const sharedButtonProps = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
  disabled: PropTypes.bool,
  strentch: PropTypes.bool
};

BasicButton.propTypes= {
  ...sharedButtonProps,
  kind: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};
SecondaryButton.propTypes = sharedButtonProps;
PrimaryButton.propTypes = sharedButtonProps;
