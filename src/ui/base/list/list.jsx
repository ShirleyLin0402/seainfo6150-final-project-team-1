import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const List = memo(({ items, className }) => (
  <ul className={className}>
    {
      items.map((item, idx) => (
        <li
          key={item.key == null ? idx : item.key}
          className={item.className}
        >
          <item.Component/>
        </li>
      ))
    }
  </ul>
));

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      Component: PropTypes.elementType.isRequired,
      className: PropTypes.string,
    }).isRequired
  ),
  className: PropTypes.string,
};
