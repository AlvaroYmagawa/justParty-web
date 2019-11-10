import produce from 'immer';

const INITIAL_STATE = {
  cart: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_SUCCESS': {
        draft.cart.push(action.product);
        break;
      }
      default:
    }
  });
}
