import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { addWishSuccess } from './actions';

export function* addNewWish({ payload }) {
  try {
    const { eventId } = payload;

    yield call(api.post, 'wishlists', {
      event_id: eventId,
      date: new Date(),
    });

    const response = yield call(api.get, 'wishlists');

    yield put(addWishSuccess(response.data));
    toast.success('Dados atualizados com sucesso!');
  } catch (err) {
    toast.error('Evento já está em sua lista de desejos!');
  }
}

export default all([takeLatest('@wishlist/ADD_WISH_REQUEST', addNewWish)]);
