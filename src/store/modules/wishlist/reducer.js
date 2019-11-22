import produce from 'immer';

const INITIAL_STATE = {
  wishlist: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@wishlist/UPDATE_WISHLIST': {
        const { wishes } = action.payload;

        draft.wishlist = wishes;
        break;
      }
      default:
    }
  });
}
