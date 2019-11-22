export function addWishRequest(eventId) {
  return {
    type: '@wishlist/ADD_WISH_REQUEST',
    payload: { eventId },
  };
}

export function loadWishlistRequest() {
  return {
    type: '@wishlist/LOAD_WISHLIST_REQUEST',
  };
}

export function removeWishRequest(wishId) {
  return {
    type: '@wishlist/REMOVE_WISH_REQUEST',
    payload: { wishId },
  };
}

export function updateWishlist(wishes) {
  return {
    type: '@wishlist/UPDATE_WISHLIST',
    payload: { wishes },
  };
}
