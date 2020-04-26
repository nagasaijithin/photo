import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { init, clearImags } from "../actions";
import Title from "../components/title.component";
import Allimage from "../components/allimages.component";
import Pagebar from "../components/pagebar.component";

const HomePage = ({ init, clearImags, match }) => {
  useGetdataFromApi(init, clearImags, match.params.id);
  return (
    <>
      <Title title="Latest images" />
      <Allimage />
      <Pagebar pagebartype="initbar" />
    </>
  );
};

function useGetdataFromApi(init, clearImages, id) {
  useEffect(() => {
    init(id);
    return () => clearImages();
  }, [id]);
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { init, clearImags })(
  withRouter(HomePage)
);
