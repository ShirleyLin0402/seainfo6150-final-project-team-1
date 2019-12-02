import React, { memo, useCallback } from 'react';
import { Page } from '../../ui/base/page-container/page-container';
import { withRouter, useParams, Redirect } from 'react-router-dom';
import { TitleLarge, TitleMedium, TextMedium, TitleSmall, TextCaption } from '../../ui/base/typography/typography';
import { PrimaryButton, SecondaryButton } from '../../ui/base/button/button';
import { allItems } from '../../data/all-products';
import styles from './checkout.module.css';

const CheckoutStateless = memo(({ name, price, onContinueClicked }) => (
  <Page>
    <div className={styles.pageTitle}>
      <TitleLarge text="Cart"/>
    </div>
    <form className={styles.form}>
        <div className={styles.pageSubtitle}>
          <TitleMedium text="Order Overview"/>
        </div>
        <div className={styles.item}>
          <div>
            <TextMedium text={name}/>
          </div>
          <div>
            <TextMedium text={price}/>
          </div>
        </div>
        <div className={styles.subTotal}>
          <div>
            <TitleSmall text="Subtotal"/>
          </div>
          <div>
            <TextCaption text={price}/>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <SecondaryButton type="button" title="contineu shopping" strentch onClick={onContinueClicked}>
              Continue Shopping
            </SecondaryButton>
          </div>
          <div className={styles.button}>
            <PrimaryButton type="submit" title="checkout" strentch>
              Checkout
            </PrimaryButton>
          </div>
        </div>
    </form>
  </Page>
));

export const Checkout = withRouter(({ history }) => {
  const { id } = useParams();
  const item = allItems.get(id);
  const onContinueClicked = useCallback(() => history.push('/shop'), [history]);
  return item == null
    ? <Redirect to="/404"/>
    : <CheckoutStateless name={item.name} price={item.price} onContinueClicked={onContinueClicked}/>
});
