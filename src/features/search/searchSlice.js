import { createSlice } from "@reduxjs/toolkit";
import { set } from "lodash";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
    previous: "",
  },
  reducers: {
    setSearch: (state, { payload }) => {
      set(state, ["value"], payload);
    },
    setPreviousSearch: (state, { payload }) => {
      set(state, ["previous"], payload);
    },
  },
});

export const { setSearch, setPreviousSearch } = searchSlice.actions;

export const selectSearch = (state) => state.search;

export default searchSlice.reducer;
