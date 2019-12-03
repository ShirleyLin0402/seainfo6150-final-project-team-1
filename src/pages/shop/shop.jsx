import PropTypes from 'prop-types';
import React, { memo, useEffect, useState, useCallback, useMemo } from 'react';
import { ShopItem } from './shop-item/shop-item';
import { TitleMedium } from '../../ui/base/typography/typography';
import { Page } from '../../ui/base/page-container/page-container';
import { List } from '../../ui/base/list/list';
import styles from './shop.module.css';
import { PurchaseDialog } from './purchase-dialog/purchase-dialog';
import { withRouter } from 'react-router-dom';
import { allItems } from '../../data/all-products';
import NavBar from '../../nav/nav-bar';
const productParams = require('../../data/products.json');
const giftCardParams = require('../../data/gift-cards.json');

const ShopStateless = memo(({ ModalComponent, onItemClick, modalOpen }) => {
  const productItems = useMemo(() => productParams.map(({ price, name, image, id }) => ({
    Component: () => <ShopItem price={price} name={name} image={image} id={id} onItemClick={onItemClick}/>,
  })), [onItemClick]);
  const giftCardItetms = useMemo(() => giftCardParams.map(({ price, name, image, id }) => ({
    Component: () => <ShopItem price={price} name={name} image={image} id={id} onItemClick={onItemClick}/>,
  })), [onItemClick]);

  return (
    <Page modalOpen={modalOpen}>
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
      <NavBar />
      {modalOpen && <ModalComponent/>}
      <NavBar/>
    </Page>
  );
});

ShopStateless.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  ModalComponent: PropTypes.elementType.isRequired,
  modalOpen: PropTypes.bool.isRequired,
}

export const Shop = withRouter(({ history }) => {
  const [selectedItem, setSelectedItem] = useState(undefined);
  const setSelectedItemFromUrl = useCallback(() => {
    const itemId = new URLSearchParams(window.location.search).get('id');
    if (itemId == null) {
      setSelectedItem(undefined);
    } else {
      setSelectedItem(allItems.get(itemId));
    }
  }, [setSelectedItem]);
  const closeModal = useCallback(() => {
    history.push('/shop', { scrollToTop: false });
  }, [history]);
  const onPurchaseClicked = useCallback(() => {
    history.replace(`/checkout/${selectedItem.id}`);
  }, [history, selectedItem]);

  const ModalComponent = useCallback(() => selectedItem
   ? (<PurchaseDialog
        name={selectedItem.name}
        price={selectedItem.price}
        image={selectedItem.image}
        onCancelClicked={closeModal}
        onPurchaseClicked={onPurchaseClicked}
        description={selectedItem.description}
      />)
    : null, [selectedItem, onPurchaseClicked, closeModal]);

  const onItemClick = useCallback(id => {
    history.push(`/shop?id=${id}`, { scrollToTop: false });
  }, [history]);

  useEffect(() => {
    setSelectedItemFromUrl();
    return history.listen(setSelectedItemFromUrl);
  }, [setSelectedItemFromUrl, history]);

  return (
    <ShopStateless
      modalOpen={selectedItem!=null}
      ModalComponent={ModalComponent}
      onItemClick={onItemClick}
    />
  );
});
