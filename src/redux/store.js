import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filteredReducer } from './contacts/contacts-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
// import { contactsApi } from './contacts/contacts-slice';
// import { authApi } from './auth/auth-slice';
import { authSlice } from './auth/auth-slice';
import { contactsSlice } from './contacts/contacts-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  blacklist: ['filtered'],
};

export const store = configureStore({
  reducer: {
    // [contactsApi.reducerPath]: contactsApi.reducer,

    contacts: contactsSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    // [authApi.reducerPath]: persistReducer(authPersistConfig, authApi.reducer),
    filtered: filteredReducer,
  },
  // middleware: [...middleware, contactsApi.middleware],
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// Code without RTK-----------------------------------
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

//Просмотр фунций-прослоек в console.log
// console.log(middleware);

//-----------------------------------------
// стейт в localstorage, без phoneBookReducer.filtered(добавил blacklist)
// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filtered'],
// };

// export const store = configureStore({
//   reducer: {
//     // вариант объекта с local storage, также раскоментировать PersistGate в index.js
//     // phonebook: persistReducer(contactsPersistConfig, phoneBookReducer),
//     phonebook: phoneBookReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development', //по умолчанию true, можно не указывать их в объекте, включаем только в режиме разработки через NODE_ENV
// });
//-----------------------------------------

//----------------------------------------- весь стейт в localstorage
// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
// };
// const rootReducer = combineReducers({
//   phonebook: phoneBookReducer, //объект из rootReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware,
//   devTools: process.env.NODE_ENV === 'development', //по умолчанию true, можно не указывать их в объекте, включаем только в режиме разработки через NODE_ENV
// });
//-----------------------------------------

// export const persistor = persistStore(store);
