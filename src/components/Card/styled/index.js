import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div({
  overflow: "hidden",
  borderRadius: 4,
  backgroundColor: "#ffff",
  width: 345,
  boxSizing: "border-box",
  margin: 8,
  padding: 20,
  position: "relative",
});

export const Title = styled.h2({
  fontSize: "1.5rem",
  fontWeight: 400,
  lineHeight: 1.334,
  letterSpacing: "0em",
  margin: 0,
});

export const Text = styled.p({
  color: "rgba(0, 0, 0, 0.54)",
  margin: 0,
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.75,
  letterSpacing: "0.00938em",
});

export const DeleteButton = styled(IconButton)({
  position: "absolute !important",
  top: 14,
  right: 20,
  color: "#d32f2f !important",
});
