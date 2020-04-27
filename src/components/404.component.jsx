import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const FofWapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const FofMain = styled.h1`
  font-size: 30rem;
  font-weight: 900;
`;
const Fofcontent = styled.h1`
  font-size: 3rem;
  width: 100%;
  text-align: center;
`;
const BackToHomeButton = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 1rem;
  background: black;
  border-radius: 20px;
  font-size: 1.4rem;
  transition: all 0.6s ease-in;
  &:hover {
    background: white;
    color: black;
  }
`;
const FofComponent = () => {
  return (
    <FofWapper>
      <Fofcontent>Why are you here ? this page is not found</Fofcontent>
      <FofMain>404</FofMain>
      <BackToHomeButton to="/">BACK TO HOME</BackToHomeButton>
    </FofWapper>
  );
};

export default FofComponent;
