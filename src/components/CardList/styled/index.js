import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

export const Wrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  boxSizing: "border-box",
});

export const LoadingIndicator = styled(CircularProgress)({
  color: "#FFE300 !important",
});
