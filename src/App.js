import React from "react";
import styled from "styled-components";

import { SearchForm, CardList } from "./components";

export const Container = styled.div({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  fontSize: "1rem",
  backgroundColor: "#272b30",
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
