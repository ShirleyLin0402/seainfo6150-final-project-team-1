import classnames from 'classnames';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const BasicButton = memo(({ children, type, disabled, kind, strentch, onClick }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
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

export const SecondaryButton = memo(({ children, type, disabled, strentch, onClick }) => (
  <BasicButton
    type={type}
    disabled={disabled}
    strentch={strentch}
    onClick={onClick}
    kind="secondary"
  >
    {children}
  </BasicButton>
));


export const PrimaryButton = memo(({ children, type, disabled, strentch, onClick }) => (
  <BasicButton
    type={type}
    disabled={disabled}
    strentch={strentch}
    onClick={onClick}
    kind="primary"
  >
    {children}
  </BasicButton>
));

export const LinkButton = memo(({ children, disabled, href, title }) => (
  <a
    href={href}
    title={title}
  >
    {children}
  </a>
));

const sharedButtonProps = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
  disabled: PropTypes.bool,
  strentch: PropTypes.bool,
  onClick: PropTypes.func,
};

BasicButton.propTypes= {
  ...sharedButtonProps,
  kind: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};
SecondaryButton.propTypes = sharedButtonProps;
PrimaryButton.propTypes = sharedButtonProps;

LinkButton.propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
