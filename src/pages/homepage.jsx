import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { init } from "../actions";
import Title from "../components/title.component";
import Allimage from "../components/allimages.component";
import Pagebar from "../components/pagebar.component";

const HomePage = ({ init, match }) => {
  useEffect(() => {
    init(Number(match.params.id));
  }, []);
  return (
    <>
      <Title title="Latest images" />
      <Allimage />
      <Pagebar pagebartype="initbar" />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { init })(withRouter(HomePage));
