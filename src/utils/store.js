import { configureStore } from "@reduxjs/toolkit";
import sideBarSlider from "./sideBarSlider";
import searchSuggestion from "./searchSuggestion";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    sideBarToggle: sideBarSlider,
    searchSlice: searchSuggestion,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
