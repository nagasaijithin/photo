import React, { useEffect } from "react";
import { connect } from "react-redux";

import { collections, clearcollections } from "../actions";
import Title from "../components/title.component";
import CollectionList from "../components/collectionlist.component";
import Pagebar from "../components/pagebar.component";
const CollectionsPage = ({ match, setup, clearcollections }) => {
  useGetdatafromApi(setup, clearcollections, match.params.id);
  return (
    <div>
      <Title title="Collections" />
      <CollectionList />
      <Pagebar pagebartype="collectionbar" />
    </div>
  );
};

function useGetdatafromApi(setup, clearcollections, id) {
  useEffect(() => {
    setup(id);
    return () => clearcollections();
  }, [id]);
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, {
  setup: collections,
  clearcollections,
})(CollectionsPage);
