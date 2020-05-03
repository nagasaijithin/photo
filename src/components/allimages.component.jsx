import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Imagelist from "./imagelist.component";

const CardItemsWapper = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0 33px;
  grid-auto-rows: 10px;
  @media ${(props) => props.theme.mediaQuery.mediaforImageList} {
    grid-gap: 0 13px;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    padding: 3rem;
  }
`;

const Allimageslist = ({ images }) => {
  let imageslist =
    images.length > 1 && images[0].urls
      ? images
      : images.results
      ? images.results
      : [];
  return (
    <>
      {imageslist.map(({ urls, id, alt_description, user, links }) => (
        <Imagelist
          key={id}
          url={urls}
          user={user}
          alt={alt_description}
          dimg={links.download}
          id={id}
        />
      ))}
    </>
  );
};

const Allimage = ({ images, ownlink }) => {
  // console.log(props);
  return (
    <CardItemsWapper>
      {ownlink ? (
        <Allimageslist images={ownlink} />
      ) : (
        <Allimageslist images={images} />
      )}
    </CardItemsWapper>
  );
};
const mapStateToProps = (state) => {
  return {
    images: state.intiReducer,
  };
};

export default connect(mapStateToProps)(Allimage);
