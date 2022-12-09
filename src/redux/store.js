// import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
// import persistReducer from "redux-persist/es/persistReducer";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
const persistConfig = {
  key: "root",
  // storage,
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

// export const store =  configureStore({
//   reducer: userReducer,
// })
