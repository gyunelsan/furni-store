import { configureStore, combineReducers } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';
import cartReducer from './cartSlice';
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
};

const rootReducer = combineReducers({
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer),
  cart: cartReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;