import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Wrapper, Input, SearchButton } from "./styled";
import { getPeopleBySearchName } from "../../features/people/peopleSlice";
import { selectSearch, setSearch } from "../../features/search/searchSlice";

const SearchForm = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

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
    dispatch(setSearch(""));
  }, [dispatch, search]);

  return (
    <Wrapper>
      <Input type="search" value={search} onChange={handleChangeInput} />
      <SearchButton type="button" onClick={handleSearchPeople}>
        Search
      </SearchButton>
    </Wrapper>
  );
};

export default SearchForm;
