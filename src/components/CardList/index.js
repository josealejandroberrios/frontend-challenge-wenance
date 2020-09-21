import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

import { Wrapper, LoadingIndicator } from "./styled";
import Card from "../Card";
import InfoMessage from "../InfoMessage";

import { selectPeople } from "../../features/people/peopleSlice";
import { selectSearch } from "../../features/search/searchSlice";

const CardList = () => {
  const { list, isLoading, error, completeFetch } = useSelector(selectPeople);
  const { previous: search } = useSelector(selectSearch);

  if (isLoading) {
    return (
      <Wrapper>
        <LoadingIndicator />
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <InfoMessage content="An error has occurred, please try again" />
      </Wrapper>
    );
  }

  if (completeFetch && isEmpty(list)) {
    const content = (
      <>
        No results found for search <b>"{search}"</b>
      </>
    );

    return (
      <Wrapper>
        <InfoMessage content={content} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {list.map((person) => (
        <Card
          key={person.name}
          name={person.name}
          height={person.height}
          gender={person.gender}
        />
      ))}
    </Wrapper>
  );
};

export default CardList;
