import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "./menuSlice";
import searchReducer from './searchSlice';
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});
export default store