
// import reduxStorage from "../states/storage";
// import rootReducer from "@states/rootReducer";
// import { configureStore } from "@reduxjs/toolkit";
// import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";

// const persistConfig = {
//     key: 'root',
//     storage: reduxStorage,
//     blacklist: [],
//     whitelist: ['user', 'cart']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE]
//             }
//         })
// })

// export const persistor = persistStore(store)

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;















// src/states/store.tsx
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// ✅ Simple store WITHOUT redux-persist
export const store = configureStore({
  reducer: rootReducer,
  // Middleware automatically configure ho jayega
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// -------------------------------------------------- -down one is right>













// import { configureStore } from '@reduxjs/toolkit'
// import { persistReducer, persistStore } from 'redux-persist'
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'redux-persist'
// import rootReducer from './rootReducer'
// import reduxStorage from './storage'

// const persistConfig = {
//   key: 'root',
//   storage: reduxStorage,
//   blacklist:[],
//   whitelist: ['user'],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [
//           FLUSH,
//           REGISTER,
//           REHYDRATE,
//           PAUSE,
//           PERSIST,
//           PURGE,
//         ],
//       },
//     }),
// })

// export const persistor = persistStore(store)

// // ✅ SINGLE SOURCE OF TRUTH
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
