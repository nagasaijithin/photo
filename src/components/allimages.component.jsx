import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Imagelist from "./imagelist.component";

const CardItemsWapper = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 0 33px;
  grid-auto-rows: 10px;
`;

const Allimageslist = ({ images }) => {
  console.log(images);
  let imageslist =
    images.length > 1 && images[0].urls
      ? images
      : images.results
      ? images.results
      : [];
  console.log(imageslist);
  return (
    <>
      {imageslist.map(({ urls, id, alt_description, user, links }) => (
        <Imagelist
          key={id}
          url={urls.thumb}
          user={user}
          alt={alt_description}
          dimg={links.download}
        />
      ))}
    </>
  );
};

const Allimage = ({ images }) => {
  // console.log(images);
  return (
    <CardItemsWapper>
      <Allimageslist images={images} />
    </CardItemsWapper>
  );
};
const mapStateToProps = (state) => {
  return {
    images: state.intiReducer,
  };
};

export default connect(mapStateToProps)(Allimage);
