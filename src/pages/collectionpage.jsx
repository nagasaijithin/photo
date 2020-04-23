import React, { useEffect } from "react";
import { connect } from "react-redux";
import { collectionPhotos } from "../actions";
import Allimage from "../components/allimages.component";
const Collectionpage = ({ match, setup }) => {
  useEffect(() => {
    setup(match.params.clid, 1);
  }, []);
  return (
    <div>
      <Allimage />
    </div>
  );
};
const mapStateToProps = (state) => ({ state });
export default connect(mapStateToProps, { setup: collectionPhotos })(
  Collectionpage
);
