import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
// import createSecureStore from "redux-persist-expo-securestore";
import NoteReducer from "./reducers/NoteReducer";

// secure storage unnecessary for this app, but i am playing with it

// const storage = createSecureStore();

const persistConfig = {
  key: "root",
  //   storage,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, NoteReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
const getStore = () => store;
const getPersistor = () => persistor;

export { getStore, getPersistor };

export default {
  getStore,
  getPersistor,
};
