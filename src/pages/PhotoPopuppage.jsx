import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getaPhoto } from "../actions";
import PhotoHeader from "../components/photoheader.component";
import PhotoRelatedImages from "../components/photorelatedimages.component";

const PhotoPopuppage = ({ match, setup }) => {
  useEffect(() => {
    setup(match.params.pid);
  }, []);
  return (
    <div>
      <PhotoHeader />
      <PhotoRelatedImages />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { setup: getaPhoto })(PhotoPopuppage);
