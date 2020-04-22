import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { init } from "../actions";
import Allimage from "../components/allimages.component";
import Pagebar from "../components/pagebar.component";

const HomePage = ({ init, match }) => {
  useEffect(() => {
    init(Number(match.params.id));
  }, []);
  return (
    <>
      <h1>Latest images</h1>
      <Allimage />
      <Pagebar />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { init })(withRouter(HomePage));
