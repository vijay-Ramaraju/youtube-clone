import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "./menuSlice";
import searchReducer from './searchSlice';
import chatReducer from "./chatSlice";
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    search: searchReducer,
    chat: chatReducer,
    user:userReducer,
  },
});
export default store