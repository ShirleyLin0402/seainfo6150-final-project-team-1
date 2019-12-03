import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styles from './typography.module.css';

export const TitleSmall = memo(({ text, className }) => (
  <h5 className={classnames(className, styles.titleSmall)}>
    {text}
  </h5>
));

export const TitleMedium = memo(({ text, className }) => (
  <h4 className={classnames(className, styles.titleMedium)}>
    {text}
  </h4>
));

export const TitleMediumLeft = memo(({ text, className }) => (
  <h6 className={classnames(className, styles.titleMediumLeft)}>
    {text}
  </h6>
));

export const TextMedium = memo(({ text, className }) => (
  <p className={classnames(className, styles.textMedium)}>
    {text}
  </p>
));

export const TextCaption =  memo(({ text, className }) => (
  <p className={classnames(className, styles.textCaption)}>
    {text}
  </p>
));

export const TitleLarge = memo(({ text, className }) => (
  <h2 className={classnames(className, styles.titleLarge)}>
    {text}
  </h2>
));

const sharedPropTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

TitleSmall.propTypes = sharedPropTypes;
TitleMedium.propTypes = sharedPropTypes;
TitleMediumLeft.propTypes = sharedPropTypes;
TitleLarge.propTypes = sharedPropTypes;
TextMedium.propTypes = sharedPropTypes;
TextCaption.propTypes = sharedPropTypes;
