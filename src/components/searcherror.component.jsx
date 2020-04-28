import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorWapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const ErrorTitle = styled.h1`
  font-size: 3rem;
`;
const BackToHome = styled(Link)`
  padding: 1rem;
  background-color: #2d2d2d;
  text-decoration: none;
  color: white;
  font-size: 1.7rem;
  border-radius: 20px;
  transition: all 0.8s ease-in;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const Searcherror = ({ title }) => {
  return (
    <ErrorWapper>
      <ErrorTitle>
        Sorry, we can't find the "{title}" type of images.{" "}
      </ErrorTitle>
      <BackToHome to="/">Back To Home</BackToHome>
    </ErrorWapper>
  );
};

export default Searcherror;
