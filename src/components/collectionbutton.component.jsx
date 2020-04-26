import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { collectionPhotoDetails, clearImags } from "../actions";
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
  collectionPhotoDetails,
  { id, onpage, totalphotos, title, startpoint }
) => {
  if (totalphotos > 25) {
    collectionPhotoDetails(title, totalphotos - 25, id, startpoint, onpage + 1);
  }
};
const runtheactionsforbackbtn = (
  collectionPhotoDetails,
  { id, onpage, totalphotos, title, startpoint }
) => {
  collectionPhotoDetails(title, totalphotos + 25, id, startpoint, onpage - 1);
};

const CollectionButton = ({
  state: {
    collectiondetails: { startpoint, title, totalphotos, id, onpage },
  },
  collectionPhotoDetails,
  clearImags,
  match,
}) => {
  let collectiondetailsValues = {
    startpoint,
    title,
    totalphotos,
    id,
    onpage,
  };
  useUpdatabynavgation(
    match.params.id,
    clearImags,
    collectionPhotoDetails,
    startpoint,
    title,
    totalphotos,
    id,
    onpage
  );
  return (
    <ButtonWapper>
      {onpage > 1 && (
        <MainButton
          title="Back Page"
          to={`/collection/${id}/${Number(onpage) - 1}`}
          onClick={() =>
            runtheactionsforbackbtn(
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
              collectionPhotoDetails,
              collectiondetailsValues
            )
          }
          to={`/collection/${id}/${Number(onpage) + 1}`}
        >
          Next page
        </MainButton>
      )}
    </ButtonWapper>
  );
};

function useUpdatabynavgation(
  pid,
  clearImags,
  collectionPhotoDetails,
  startpoint,
  title,
  totalphotos,
  id,
  onpage
) {
  useEffect(() => {
    collectionPhotoDetails(title, totalphotos, id, startpoint, pid);
    return () => clearImags();
  }, [pid]);
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, {
  collectionPhotoDetails,
  clearImags,
})(CollectionButton);
