import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import { Dialog } from '../../../ui/base/dialog/dialog';
import { TitleSmall, TextCaption, TextMedium } from '../../../ui/base/typography/typography';
import { PrimaryButton, SecondaryButton } from '../../../ui/base/button/button';
import styles from './purchase-dialog.module.css';

function maybeCreateModalContainer() {
  const id = 'purchaseDialogContainer';
  const existedContainer = document.querySelector(`#${id}`);
  if (existedContainer != null) {
    return existedContainer;
  }
  const container = document.createElement('div');
  container.setAttribute('id', id);
  document.body.prepend(container);
  return container;
}

const stopPropagation = e => e.stopPropagation();

export const PurchaseDialog = memo(({ description, name, price, image, onCancelClicked, onPurchaseClicked }) => {
  const container = maybeCreateModalContainer();
  return createPortal((
    <Dialog onBackgroundClicked={onCancelClicked}>
      <div className={styles.wrapper} onClick={stopPropagation}>
        <div className={styles.image}>
          <img src={image} alt={name}/>
        </div>
        <article className={styles.article}>
          <div className={styles.title}>
            <TitleSmall text={name}/>
          </div>
          <div className={styles.price}>
            <TextCaption text={price}/>
          </div>
          <div className={styles.description}>
            <TextMedium text={description}/>
          </div>
        </article>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <PrimaryButton
              strentch
              type="submit"
              title="Purchase"
              onClick={onPurchaseClicked}
            >
              Purchase
            </PrimaryButton>
          </div>
          <div className={styles.button}>
            <SecondaryButton
              strentch
              title="back"
              type="button"
              onClick={onCancelClicked}
            >
              Cancel
            </SecondaryButton>
          </div>
        </div>
      </div>
    </Dialog>
  ), container);
});

PurchaseDialog.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onCancelClicked: PropTypes.func.isRequired,
  onPurchaseClicked: PropTypes.func.isRequired,
};
