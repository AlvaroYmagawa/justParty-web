import produce from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/ADD_TO_CART': {
        const newProduct = {
          ...action.payload.product,
          counter: 1,
        };
        draft.products.push(newProduct);
        break;
      }

      case '@auth/SIGN_OUT': {
        for (let i = 0; i < draft.products.length + 1; i += 1) {
          draft.products.pop();
        }
        break;
      }

      case '@auth/UPDATE_CART': {
        const product = draft.products.find(
          p => p.id === action.payload.product.id
        );

        draft.products.splice(action.payload.index, 1);

        const updatedProduct = {
          ...action.payload.product,

          counter:
            action.payload.operation > 0
              ? product.counter + 1
              : product.counter - 1,
        };

        draft.products = [...draft.products, updatedProduct];
        break;
      }

      default:
    }
  });
}
