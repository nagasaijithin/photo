import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchImag, clearImags } from "../actions";
import Title from "../components/title.component";
import Allimage from "../components/allimages.component";
import Pagebar from "../components/pagebar.component";

function useSearchImagesFromApi(searchImag, clearImags, query, id) {
  useEffect(() => {
    searchImag(query, id);
    return () => clearImags();
  }, [query, id]);
}
const SearchPage = ({ match, searchImag, clearImags }) => {
  useSearchImagesFromApi(
    searchImag,
    clearImags,
    match.params.query,
    match.params.id
  );
  console.log("hi");
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
export default connect(mapStateToProps, { searchImag, clearImags })(SearchPage);
