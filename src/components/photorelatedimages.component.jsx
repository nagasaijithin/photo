import React from "react";
import Title from "./title.component";
import { connect } from "react-redux";
import Allimage from "./allimages.component";
const PhotoRelatedImages = (props) => {
  return (
    <div>
      <Title title="Related Images" />
      <Allimage ownlink={props.state && props.state.results} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.photoandrelated.relatedphotos,
  };
};
export default connect(mapStateToProps)(PhotoRelatedImages);
