import { createSlice } from "@reduxjs/toolkit";
import { set } from "lodash";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    setSearch: (state, { payload }) => {
      set(state, ["value"], payload);
    },
  },
});

export const { setSearch } = searchSlice.actions;

export const selectSearch = (state) => state.search.value;

export default searchSlice.reducer;
