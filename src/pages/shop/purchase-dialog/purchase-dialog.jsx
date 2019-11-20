import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import { Dialog } from '../../../ui/base/dialog/dialog';
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

export const PurchaseDialog = memo(({ description, name, price, image, onModalClose }) => {
  const container = maybeCreateModalContainer();
  return createPortal((
    <Dialog onBackgroundClicked={onModalClose}>
      <div className={styles.wrapper}>123</div>
    </Dialog>
  ), container);
});

PurchaseDialog.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
}
