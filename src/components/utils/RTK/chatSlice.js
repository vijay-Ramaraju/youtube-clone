import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],

  },
  reducers: {
    addMessages: (state, action) => {
      state.message.length >=100 && state.message.pop()
      state.message.unshift(action.payload);
      console.log(state.message.length)
    },
    
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;