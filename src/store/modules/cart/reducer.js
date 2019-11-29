import produce from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/ADD_TO_CART': {
        draft.products.push(action.payload.product);
        break;
      }

      default:
    }
  });
}
