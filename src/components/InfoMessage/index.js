import React from "react";

import { Wrapper, Text } from "./styled";

const InfoMessage = ({ content }) => (
  <Wrapper>
    <Text>{content}</Text>
  </Wrapper>
);

export default InfoMessage;
