import React, { useEffect } from "react";
import { connect } from "react-redux";
import history from "../history";
import { collectionPhotos } from "../actions";
import Allimage from "../components/allimages.component";
import CollectionButton from "../components/collectionbutton.component";
import Title from "../components/title.component";
const Collectionpage = ({ match, setup, ...props }) => {
  useEffect(() => {
    console.log("hi");
    props.state.intiReducer.length > 1
      ? setup(match.params.clid, 1)
      : history.push("/collections/1");
  }, []);
  return (
    <div>
      <Title title={props.state.collectiondetails.title} />
      <Allimage />
      <CollectionButton />
    </div>
  );
};
const mapStateToProps = (state) => ({ state });
export default connect(mapStateToProps, { setup: collectionPhotos })(
  Collectionpage
);