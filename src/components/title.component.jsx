import React from "react";
import styled from "styled-components";
const H1 = styled.h1`
  font-size: 2.4rem;
`;
const Title = ({ title }) => {
  return <H1>{title}</H1>;
};

export default Title;
