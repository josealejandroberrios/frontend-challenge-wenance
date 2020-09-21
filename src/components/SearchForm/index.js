import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  WrapperSearch,
  WrapperInput,
  Input,
  SearchButton,
} from "./styled";
import { Search as SearchIcon } from "@material-ui/icons";
import { getPeopleBySearchName } from "../../features/people/peopleSlice";
import {
  selectSearch,
  setSearch,
  setPreviousSearch,
} from "../../features/search/searchSlice";

const SearchForm = () => {
  const dispatch = useDispatch();
  const { value: search } = useSelector(selectSearch);

  const handleChangeInput = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;
      dispatch(setSearch(value));
    },
    [dispatch]
  );

  const handleSearchPeople = useCallback(async () => {
    await dispatch(getPeopleBySearchName(search));
    dispatch(setPreviousSearch(search));
    dispatch(setSearch(""));
  }, [dispatch, search]);

  return (
    <Container>
      <WrapperSearch>
        <WrapperInput>
          <Input
            type="text"
            value={search}
            onChange={handleChangeInput}
            placeholder="Search"
          />
        </WrapperInput>
        <SearchButton type="button" onClick={handleSearchPeople}>
          <SearchIcon />
        </SearchButton>
      </WrapperSearch>
    </Container>
  );
};

export default SearchForm;
