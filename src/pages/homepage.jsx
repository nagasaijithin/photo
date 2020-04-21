import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { init } from "../actions";
import Allimage from "../components/allimages.component";
import Pagebar from "../components/pagebar.component";
const HomepageContiner = styled.div`
  max-width: ${(props) => props.theme.continer};
  margin: 0 auto;
  padding: 3rem;
`;
const HomePage = ({ init, match }) => {
  useEffect(() => {
    init(Number(match.params.id));
  }, []);
  return (
    <HomepageContiner>
      <h1>Latest images</h1>
      <Allimage />
      <Pagebar />
    </HomepageContiner>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { init })(withRouter(HomePage));
