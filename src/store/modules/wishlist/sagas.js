import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateWishlist } from './actions';

export function* addNewWish({ payload }) {
  try {
    const { eventId } = payload;

    yield call(api.post, 'wishlists', {
      event_id: eventId,
      date: new Date(),
    });

    const response = yield call(api.get, 'wishlists');

    yield put(updateWishlist(response.data));
  } catch (err) {
    toast.error('Evento já está em sua lista de desejos!');
  }
}

export function* removeWish({ payload }) {
  try {
    const { wishId } = payload;

    yield call(api.delete, `/wishlists/${wishId}`);

    const response = yield call(api.get, 'wishlists');

    yield put(updateWishlist(response.data));
  } catch (err) {
    toast.error('Algo deu errado!');
  }
}

export function* loadWishlist() {
  try {
    const response = yield call(api.get, 'wishlists');

    yield put(updateWishlist(response.data));
  } catch (err) {
    toast.error('Algo deu errado!');
  }
}

export default all([
  takeLatest('@wishlist/ADD_WISH_REQUEST', addNewWish),
  takeLatest('@wishlist/REMOVE_WISH_REQUEST', removeWish),
  takeLatest('@wishlist/LOAD_WISHLIST_REQUEST', loadWishlist),
]);
