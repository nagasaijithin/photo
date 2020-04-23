import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchImag } from "../actions";
import Title from "../components/title.component";
import Allimage from "../components/allimages.component";
import Pagebar from "../components/pagebar.component";
const SearchPage = ({ match, searchImag }) => {
  useEffect(() => {
    searchImag(match.params.query, match.params.id);
  }, []);
  return (
    <div>
      <Title title={match.params.query} />
      <Allimage />
      <Pagebar pagebartype="searchbar" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.intiReducer,
  };
};
export default connect(mapStateToProps, { searchImag })(SearchPage);
