import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "../features/people/peopleSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
  reducer: {
    people: peopleReducer,
    search: searchReducer,
  },
});
