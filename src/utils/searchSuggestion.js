import { createSlice } from "@reduxjs/toolkit";

const searchSuggestion = createSlice({
  name: "searchSlice",
  initialState: {
    isSuggestionOpen: true,
  },
  reducers: {
    suggestionToggle: (state) => {
      state.isSuggestionOpen = !state.isSuggestionOpen;
    },
  },
});

export const { suggestionToggle } = searchSuggestion.actions;
export default searchSuggestion.reducer;
