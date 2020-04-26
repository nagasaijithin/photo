import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getaPhoto, clearPhotoimages } from "../actions";
import PhotoHeader from "../components/photoheader.component";
import PhotoRelatedImages from "../components/photorelatedimages.component";
function usePhotodataFromApi(setup, clearPhotoimages, pid) {
  useEffect(() => {
    setup(pid);
    return () => clearPhotoimages();
  }, [pid]);
}
const PhotoPopuppage = ({ match, setup, clearPhotoimages }) => {
  usePhotodataFromApi(setup, clearPhotoimages, match.params.pid);
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
export default connect(mapStateToProps, { setup: getaPhoto, clearPhotoimages })(
  PhotoPopuppage
);
