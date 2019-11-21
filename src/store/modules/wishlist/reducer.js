import produce from 'immer';

const INITIAL_STATE = {
  wishlist: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@wishlist/ADD_WISH_REQUEST': {
        break;
      }
      case '@wishlist/ADD_WISH_SUCCESS': {
        const { wishes } = action.payload;

        draft.wishlist = wishes;
        break;
      }
      default:
    }
  });
}
