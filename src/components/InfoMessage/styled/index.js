import styled from "styled-components";

export const Wrapper = styled.div({
  minWidth: 300,
  maxWidth: 700,
  wordBreak: "break-all",
  borderRadius: 4,
  backgroundColor: "#ffff",
  boxSizing: "border-box",
  padding: 20,
  textAlign: "center",
  margin: "0 10px",
});

export const Text = styled.h5({
  color: "rgba(0, 0, 0, 0.54)",
  margin: 0,
  fontSize: "1.25rem",
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: "0.0075em",
});
