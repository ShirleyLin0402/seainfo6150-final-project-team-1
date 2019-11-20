import PropTypes from 'prop-types';
import React, { memo, useEffect, useState, useCallback, useMemo } from 'react';
import { ShopItem } from './shop-item/shop-item';
import { TitleMedium } from '../../ui/base/typography/typography';
import { Page } from '../../ui/base/page-container/page-container';
import { List } from '../../ui/base/list/list';
import styles from './shop.module.css';
import { parseQS } from '../../utils/qs';
import { PurchaseDialog } from './purchase-dialog/purchase-dialog';
const productParams = require('../../data/products.json');
const giftCardParams = require('../../data/gift-cards.json');
const allItems = [...productParams, ...giftCardParams].reduce((acc, cur) => {
  acc.set(cur.id, cur);
  return acc;
}, new Map());

const ShopStateless = memo(({ selectedItem, onModalClose, onItemClick }) => {
  const productItems = useMemo(() => productParams.map(({ price, name, image, id }) => ({
    Component: () => <ShopItem price={price} name={name} image={image} id={id} onItemClick={onItemClick}/>,
  })), [onItemClick]);
  const giftCardItetms = useMemo(() => giftCardParams.map(({ price, name, image, id }) => ({
    Component: () => <ShopItem price={price} name={name} image={image} id={id} onItemClick={onItemClick}/>,
  })), [onItemClick]);

  return (
    <Page modalOpen={selectedItem != null}>
      <section className={styles.section}>
        <div className={styles.title}>
          <TitleMedium text="Mechanics"/>
        </div>
        <List items={productItems} className={styles.list}/>
      </section>
      <section className={styles.section}>
        <div className={styles.title}>
          <TitleMedium text="Gift Card"/>
        </div>
        <List items={giftCardItetms} className={styles.giftCardList}/>
      </section>
      {selectedItem && (
        <PurchaseDialog
          name={selectedItem.name}
          price={selectedItem.price}
          image={selectedItem.image}
          onModalClose={onModalClose}
          description={selectedItem.description}
        />
      )}
    </Page>
  );
});

ShopStateless.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export const Shop = (() => {
  const [selectedItem, setSelectedItem] = useState(undefined);
  const onModalClose = useCallback(() => {
    setSelectedItem(undefined);
  }, [setSelectedItem]);

  const onItemClick = useCallback((id) => {
    const item = allItems.get(id);
    setSelectedItem(item);
    window.history.pushState({ id }, item.name, `?id=${id}`);
  }, [])

  useEffect(() => {
    const itemId = parseQS().get('id');
    setSelectedItem(allItems.get(itemId));
  }, [setSelectedItem]);

  return <ShopStateless selectedItem={selectedItem} onModalClose={onModalClose} onItemClick={onItemClick}/>
});
