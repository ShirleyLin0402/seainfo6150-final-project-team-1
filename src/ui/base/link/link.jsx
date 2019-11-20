import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './link.module.css';

export const InternalLink = memo(({ activeClassName, className, children, href, title }) => (
  <NavLink
    className={classnames(className, styles.link)}
    activeClassName={activeClassName}
    title={title}
    to={href}
  >
    {children}
  </NavLink>
));

InternalLink.propTypes = {
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
