export function addWishRequest(eventId) {
  return {
    type: '@wishlist/ADD_WISH_REQUEST',
    payload: { eventId },
  };
}

export function addWishSuccess(event) {
  return {
    type: '@wishlist/ADD_WISH_SUCCESS',
    payload: { event },
  };
}
