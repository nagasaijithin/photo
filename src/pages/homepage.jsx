import React, { useEffect } from "react";
import styled from "styled-components";
import Allimage from "../components/allimages.component";

import Pagebar from "../components/pagebar.component";
const HomepageContiner = styled.div`
  max-width: ${(props) => props.theme.continer};
  margin: 0 auto;
  padding: 3rem;
`;
const HomePage = ({ history, match }) => {
  useEffect(() => {
    let num = match.params.id === "1" ? "1" : match.params.id;
    history.push(`/latestimages/${num}`);
  }, [history]);
  return (
    <HomepageContiner>
      <h1>Latest images</h1>
      <Allimage />
      <Pagebar />
    </HomepageContiner>
  );
};
export default HomePage;
