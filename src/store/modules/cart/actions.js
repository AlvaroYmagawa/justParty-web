export function addToCart(product) {
  return {
    type: '@auth/ADD_TO_CART',
    payload: { product },
  };
}
