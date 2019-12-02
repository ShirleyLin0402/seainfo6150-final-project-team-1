const productParams = require('./products.json');
const giftCardParams = require('./gift-cards.json');
export const allItems = [...productParams, ...giftCardParams].reduce((acc, cur) => {
  acc.set(cur.id, cur);
  return acc;
}, new Map());
