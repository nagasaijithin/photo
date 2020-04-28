import React, { useEffect } from "react";
import { connect } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { Helmet } from "react-helmet";
import history from "../history";
import { collectionPhotos } from "../actions";
import Allimage from "../components/allimages.component";
import CollectionButton from "../components/collectionbutton.component";
import Title from "../components/title.component";
function useGetdataFromApi(titleCond, setup, collectionid, idcond) {
  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
    });
    titleCond ? setup(collectionid, idcond) : history.push("/collections/1");
    return () => {
      return "true";
    };
  }, [titleCond, setup, collectionid, idcond]);
}
const Collectionpage = ({ match, setup, ...props }) => {
  let titleCond = props.state.collectiondetails.title !== "";
  let collectionid = match.params.clid;
  let idcond = match.params.id === "1" ? 1 : match.params.id;

  useGetdataFromApi(titleCond, setup, collectionid, idcond);

  return (
    <div>
      <Helmet>
        <title>{`${props.state.collectiondetails.title} - PhotoHub`}</title>
      </Helmet>
      <Title title={props.state.collectiondetails.title} />
      <Allimage />
      <CollectionButton match={match} />
    </div>
  );
};
const mapStateToProps = (state) => ({ state });
export default connect(mapStateToProps, { setup: collectionPhotos })(
  Collectionpage
);
