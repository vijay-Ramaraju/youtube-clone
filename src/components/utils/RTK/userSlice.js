import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Shimmer from "../../Shimmer";


export const fetchData = createAsyncThunk('user/fetchData', async () => {
  //'user/fetchData' is an action type prefix
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        status: "",
        items: [],
        error:""
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        // builder callback
        builder.addCase(fetchData.pending, (state) => {
            // if it is pending 
            state.status = "Loading"
                state.error=""
        })
            .addCase(fetchData.fulfilled, (state, action) => {
                // if it is fulfilled
                state.status= "success"
                    state.items = action.payload
                
            
            }).addCase(fetchData.rejected, (state, action) => {
                // if it rejected 
                state.status = "failure";
                state.error = action.payload.message || "Some thing went wrong";
        })
    }
})

export default userSlice.reducer