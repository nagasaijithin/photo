import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { collectionPhotos, collectionPhotoDetails } from "../actions";
const ButtonWapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-between;
`;
const MainButton = styled(Link)`
  padding: 1rem;
  background: ${(props) => props.theme.downbackcolor};
  font-size: 1.4rem;
  text-decoration: none;
  color: black;
  transition: all 0.8s ease-out;
  border-radius: 20px;
  &:hover {
    background-color: white;
  }
`;

const runtheactionsfornextbtn = (
  collectionPhotos,
  collectionPhotoDetails,
  { id, onpage, totalphotos, title, startpoint }
) => {
  if (totalphotos > 25) {
    let perpage = totalphotos > 25 ? 25 : totalphotos;
    collectionPhotos(id, onpage + 1, perpage);
    collectionPhotoDetails(title, totalphotos - 25, id, startpoint, onpage + 1);
  }
};
const runtheactionsforbackbtn = (
  collectionPhotos,
  collectionPhotoDetails,
  { id, onpage, totalphotos, title, startpoint }
) => {
  collectionPhotos(id, onpage - 1, 25);
  collectionPhotoDetails(title, totalphotos + 25, id, startpoint, onpage - 1);
};

const CollectionButton = ({
  state: {
    collectiondetails: { startpoint, title, totalphotos, id, onpage },
  },
  collectionPhotos,
  collectionPhotoDetails,
}) => {
  let collectiondetailsValues = {
    startpoint,
    title,
    totalphotos,
    id,
    onpage,
  };
  return (
    <ButtonWapper>
      {onpage > 1 && (
        <MainButton
          title="Back Page"
          to={`/collection/${id}/${onpage - 1}`}
          onClick={() =>
            runtheactionsforbackbtn(
              collectionPhotos,
              collectionPhotoDetails,
              collectiondetailsValues
            )
          }
        >
          Back Page
        </MainButton>
      )}
      {totalphotos > 25 && (
        <MainButton
          title="Next page"
          onClick={(e) =>
            runtheactionsfornextbtn(
              collectionPhotos,
              collectionPhotoDetails,
              collectiondetailsValues
            )
          }
          to={`/collection/${id}/${onpage + 1}`}
        >
          Next page
        </MainButton>
      )}
    </ButtonWapper>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, {
  collectionPhotos,
  collectionPhotoDetails,
})(CollectionButton);
