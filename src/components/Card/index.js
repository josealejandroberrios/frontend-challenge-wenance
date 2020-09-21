import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { Wrapper, Title, Text, DeleteButton } from "./styled";
import { deletePerson } from "../../features/people/peopleSlice";

const CardList = ({ name, height, gender }) => {
  const dispatch = useDispatch();

  const handleDeletePerson = useCallback(() => {
    dispatch(deletePerson({ name }));
  }, [dispatch, name]);

  return (
    <Wrapper>
      <Title>{name}</Title>
      <Text>Height: {height}</Text>
      <Text>Gender: {gender}</Text>
      <DeleteButton type="button" onClick={handleDeletePerson}>
        Delete
      </DeleteButton>
    </Wrapper>
  );
};

export default CardList;
