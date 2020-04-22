import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchImag } from "../actions";
import Allimage from "../components/allimages.component";
const SearchPage = ({ match, searchImag }) => {
  useEffect(() => {
    searchImag(match.params.query, match.params.id);
  }, []);
  return (
    <div>
      <h1>{match.params.query}</h1>
      <Allimage />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.intiReducer,
  };
};
export default connect(mapStateToProps, { searchImag })(SearchPage);
