import { combineReducers } from "@reduxjs/toolkit";
import { appslice } from "./app";
import { userslice } from "./user";
import createCompressor from "redux-persist-transform-compress";
import encryptor from "./encryptor";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  user: userslice.reducer,
  app: appslice.reducer,
});

const resetRootReducer = (state, action) => {
  if (action.type === "user/logOutAction") {
    return reducers({ user: {}, app: {} }, action);
  }
  return reducers(state, action);
};
const compressor = createCompressor();
const config = {
  blacklist: ["app", "network", "toast"],
  key: "primary-1",
  storage,
  transforms: [encryptor, compressor],
};

export const persistedReducer = persistReducer(config, resetRootReducer);
