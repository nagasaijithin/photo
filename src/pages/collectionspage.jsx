import React, { useEffect } from "react";
import { connect } from "react-redux";

import { collections } from "../actions";
import Title from "../components/title.component";
import CollectionList from "../components/collectionlist.component";
import Pagebar from "../components/pagebar.component";
const CollectionsPage = ({ match, setup, ...props }) => {
  useEffect(() => {
    setup(match.params.id);
  }, []);
  return (
    <div>
      <Title title="Collections" />
      <CollectionList />
      <Pagebar pagebartype="collectionbar" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, { setup: collections })(
  CollectionsPage
);
