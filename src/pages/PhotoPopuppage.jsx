import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { Helmet } from "react-helmet";
import { getaPhoto, clearPhotoimages } from "../actions";
import PhotoHeader from "../components/photoheader.component";
import PhotoRelatedImages from "../components/photorelatedimages.component";
const PhotoPopWapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;
function usePhotodataFromApi(setup, clearPhotoimages, pid) {
  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
    });
    setup(pid);
    return () => clearPhotoimages();
  }, [pid]);
}
const PhotoPopuppage = ({ match, setup, clearPhotoimages, ...props }) => {
  usePhotodataFromApi(setup, clearPhotoimages, match.params.pid);
  return (
    <PhotoPopWapper>
      <Helmet>
        <title>Photo - PhotoHub</title>
      </Helmet>
      <PhotoHeader />
      <PhotoRelatedImages />
    </PhotoPopWapper>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { setup: getaPhoto, clearPhotoimages })(
  PhotoPopuppage
);
