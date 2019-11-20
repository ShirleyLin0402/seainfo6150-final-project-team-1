import classnames from 'classnames';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './text-input.module.css';

export const TextInput = memo(({ value, onChange, type, title, placeholder, error }) => (
  <input
    type={type}
    value={value}
    title={title}
    onChange={onChange}
    placeholder={placeholder}
    className={classnames(styles.input, {
      [styles.error]: error,
    })}
  />
));

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}
