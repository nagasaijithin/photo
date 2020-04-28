import React, { useEffect } from "react";
import { connect } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { Helmet } from "react-helmet";
import { searchImag, clearImags } from "../actions";
import Title from "../components/title.component";
import Allimage from "../components/allimages.component";
import Pagebar from "../components/pagebar.component";
import Searcherror from "../components/searcherror.component";

function useSearchImagesFromApi(searchImag, clearImags, query, id) {
  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
    });
    searchImag(query, id);
    return () => clearImags();
  }, [query, id]);
}
const SearchPage = ({ match, searchImag, clearImags, ...props }) => {
  useSearchImagesFromApi(
    searchImag,
    clearImags,
    match.params.query,
    match.params.id
  );

  if (props.state.total >= 25) {
    return (
      <div>
        <Helmet>
          <title>{`${match.params.query} - PhotoHub`}</title>
        </Helmet>
        <Title title={match.params.query} />
        <Allimage />
        {props.state.total > 25 && <Pagebar pagebartype="searchbar" />}
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>{`Upps! - PhotoHub`}</title>
      </Helmet>
      <Searcherror title={match.params.query} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.intiReducer,
  };
};
export default connect(mapStateToProps, { searchImag, clearImags })(SearchPage);
