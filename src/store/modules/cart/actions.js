export function addToCart(product) {
  return {
    type: '@auth/ADD_TO_CART',
    payload: { product },
  };
}

export function updateCart(product, index, operation) {
  return {
    type: '@auth/UPDATE_CART',
    payload: { product, index, operation },
  };
}
