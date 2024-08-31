import { createSlice } from "@reduxjs/toolkit";

const sideBarSlider = createSlice({
  name: "sideBarToggle",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    menuToggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { menuToggle } = sideBarSlider.actions;
export default sideBarSlider.reducer;
