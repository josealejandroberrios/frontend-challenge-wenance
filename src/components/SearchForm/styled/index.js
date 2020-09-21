import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Container = styled.div({
  padding: 24,
  display: "flex",
  outline: 0,
  position: "relative",
  justifyContent: "center",
});

export const WrapperSearch = styled.div({
  width: 400,
  display: "flex",
  padding: "2px 4px",
  alignItems: "center",
  boxShadow:
    "0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)",
  borderRadius: 4,
  backgroundColor: "#fff",
});

export const WrapperInput = styled.div({
  flex: 1,
  marginLeft: 8,
  cursor: "text",
  display: "inline-flex",
  position: "relative",
  fontSize: "1rem",
  boxSizing: "border-box",
  alignItems: "items",
  fontWeight: 400,
  lineHeight: "1.1em",
});

export const Input = styled.input({
  fontSize: "inherit",
  color: "currentColor",
  width: "100%",
  border: 0,
  height: "1.1876em",
  margin: 0,
  display: "block",
  padding: "6px 0 7px",
  minWidth: 0,
  background: "none",
  boxSizing: "content-box",

  "&:focus": {
    outline: 0,
  },
});

export const SearchButton = styled(IconButton)({
  padding: 10,
});
