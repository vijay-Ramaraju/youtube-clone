import { createSlice } from "@reduxjs/toolkit";


const menuStore = createSlice({
    name: "menu",
    initialState: {
        toggleMenu:true,
    },
    reducers: {
        isToggleMenu: (state) => {
            state.toggleMenu = !state.toggleMenu;
        },
        closeMenu: (state) => {
            state.toggleMenu = false;
        }
    }
})

export const { isToggleMenu, closeMenu } = menuStore.actions;

export default menuStore.reducer
