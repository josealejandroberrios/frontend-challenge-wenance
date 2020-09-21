import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

import {
  Wrapper,
  LoadingIndicator,
  ErrorMessage,
  EmptyMessage,
} from "./styled";
import Card from "../Card";
import { selectPeople } from "../../features/people/peopleSlice";

const CardList = () => {
  const { list, isLoading, error, completeFetch } = useSelector(selectPeople);

  if (isLoading) {
    return (
      <Wrapper>
        <LoadingIndicator>Loading...</LoadingIndicator>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <ErrorMessage>Error: {error}</ErrorMessage>
      </Wrapper>
    );
  }

  if (completeFetch && isEmpty(list)) {
    return (
      <Wrapper>
        <EmptyMessage>No se encontraron resultados</EmptyMessage>
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
