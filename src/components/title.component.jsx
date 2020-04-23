import React from "react";
import styled from "styled-components";
const H1 = styled.h1`
  font-size: ${(props) => props.size};
`;
const Title = ({ title, size }) => {
  let fs = size ? size : "2.4rem";
  return <H1 size={fs}>{title}</H1>;
};

export default Title;
