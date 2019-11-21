import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'justParty',
      storage,
      whiteList: ['auth', 'user', 'wishlist'], // Only persists the reducers inside the whiteList
    },
    reducers
  );

  return persistedReducer;
};
