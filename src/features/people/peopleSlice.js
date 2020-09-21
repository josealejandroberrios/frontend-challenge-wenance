import { createSlice } from "@reduxjs/toolkit";
import { set, filter, differenceBy, concat } from "lodash";

import { getPeople } from "../../api";

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    list: [],
    deleteList: [],
    completeFetch: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    getPeopleStart: (state) => {
      set(state, ["isLoading"], true);
      set(state, ["error"], null);
    },
    getPeopleSuccess: (state, { payload }) => {
      const { deleteList } = state;
      const listPeople = differenceBy(payload, deleteList, "name");

      set(state, ["list"], listPeople);
      set(state, ["isLoading"], false);
      set(state, ["error"], null);
      set(state, ["completeFetch"], true);
    },
    getProductsFailure: (state, { payload }) => {
      set(state, ["isLoading"], false);
      set(state, ["error"], payload);
      set(state, ["completeFetch"], true);
    },
    deletePerson: (state, { payload }) => {
      const { list, deleteList } = state;
      const { name } = payload;
      const filterList = filter(list, (item) => item.name !== name);
      const addDeleteItem = concat(deleteList, [{ name }]);

      set(state, ["deleteList"], addDeleteItem);
      set(state, ["list"], filterList);
      set(state, ["completeFetch"], false);
    },
  },
});

export const {
  getPeopleStart,
  getPeopleSuccess,
  getProductsFailure,
  deletePerson,
} = peopleSlice.actions;

export const selectPeople = (state) => state.people;

export default peopleSlice.reducer;

export const getPeopleBySearchName = (search) => async (dispatch) => {
  try {
    dispatch(getPeopleStart());
    const { results } = await getPeople(search);
    dispatch(getPeopleSuccess(results));
  } catch (error) {
    dispatch(getProductsFailure(error.toString()));
  }
};
