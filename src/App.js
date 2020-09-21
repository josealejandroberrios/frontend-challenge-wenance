import React from "react";
import styled from "styled-components";

import { SearchForm, CardList } from "./components";

export const Container = styled.div({
  textAlign: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
});

const App = () => {
  return (
    <Container>
      <SearchForm />
      <CardList />
    </Container>
  );
};

export default App;
