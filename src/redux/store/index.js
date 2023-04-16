import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import userReducer from "../reducers/userReducer";
import kitchenReducer from "../reducers/kitchenReducer";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  storage: localStorage,
  key: "root",
  // transform: [encryptTransform({ secretKey: process.env.STORAGE_SECRET_KEY })],
};

const combineReducer = combineReducers({
  users: userReducer,
  kitchen: kitchenReducer,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
