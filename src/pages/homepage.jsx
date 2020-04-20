import React from "react";
import styled from "styled-components";
import Allimage from "../components/allimages.component";
const HomepageContiner = styled.div`
  max-width: ${(props) => props.theme.continer};
  margin: 0 auto;
  padding: 3rem;
`;
const HomePage = () => {
  return (
    <HomepageContiner>
      <h1>Latest images</h1>
      <Allimage />
    </HomepageContiner>
  );
};
export default HomePage;
