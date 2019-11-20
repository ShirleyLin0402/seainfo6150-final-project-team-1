import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import { TitleSmall, TextCaption } from '../../../ui/base/typography/typography';
import styles from './shop-item.module.css';

export const ShopItem = memo(({ id, name, price, image, onItemClick }) => {
  const onAnchorClick = useCallback(e => {
    e.preventDefault();
    onItemClick(id);
  }, [id, onItemClick]);

  return (
    <div className={styles.shopItem}>
      <a
        href={`?id=${id}`}
        className={styles.img}
        onClick={onAnchorClick}
      >
        <img src={image} alt={name}/>
      </a>
      <a
        href={`?id=${id}`}
        className={styles.title}
        onClick={onAnchorClick}
      >
        <TitleSmall text={name}/>
      </a>
      <TextCaption text={price}/>
    </div>
  );
});

ShopItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
