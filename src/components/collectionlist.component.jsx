import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "./title.component";
import { collectionPhotoDetails } from "../actions";
const GridWapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 400px;
  grid-gap: 2rem;
  @media ${(props) => props.theme.mediaQuery.mediaforCollection2} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem;
    cursor: pointer;
    transition: all 1s ease-in;
    border-radius: 8px;
    &:hover {
      background-color: ${(props) => props.theme.downbackcolor};
    }
    & > a:first-child {
      width: 100%;
      height: 70%;
      & > img {
        width: 50%;
        height: 50%;
        object-fit: cover;
        padding: 0.1rem 0.2rem;
      }
    }
  }
`;
const TagsWapper = styled.div`
  display: flex;
  font-size: 1.2rem;
  flex-wrap: wrap;
  & > a {
    padding: 1rem;
    color: black;
    text-decoration: none;
    transition: all 0.5s ease-in;
    &:hover {
      background-color: white;
    }
  }
`;
const CollectionListWapper = styled.div`
  padding: 2rem;
  @media ${(props) => props.theme.mediaQuery.mediaMid2} {
    padding: 1rem 5rem;
  }
  @media ${(props) => props.theme.mediaQuery.mediaforCollection} {
    padding: 1rem 3rem;
  }
`;
const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ListofCollection = ({ data, collectiondetailsAction }) => {
  let datalist = data.length > 1 && data[0].tags ? data : [];
  return (
    <GridWapper>
      {datalist.length > 1 &&
        datalist.map(
          ({ id, preview_photos, tags, title, total_photos, user }) => (
            <div key={id}>
              <Link
                onClick={() =>
                  collectiondetailsAction(title, total_photos, id, total_photos)
                }
                to={`/collection/${id}/1`}
              >
                {preview_photos.map(({ id, urls }) => (
                  <img src={urls.thumb} alt={title} key={id} />
                ))}
              </Link>
              <HeaderLink
                onClick={() =>
                  collectiondetailsAction(title, total_photos, id, total_photos)
                }
                to={`/collection/${id}/1`}
              >
                <Title title={title} size="2rem" />
              </HeaderLink>
              <div style={{ padding: ".5rem", fontSize: "1.1rem" }}>
                <h3>Total Photos {total_photos}</h3>
                <h3>Created by {user.name}</h3>
              </div>
              <TagsWapper>
                {tags
                  .filter((tag, i) => tag.type === "search")
                  .filter((tag, i) => i < 4)
                  .map((tag, i) => {
                    return (
                      <Link to={`/search/${tag.title}/1`} key={i}>
                        #{tag.title}
                      </Link>
                    );
                  })}
              </TagsWapper>
            </div>
          )
        )}
    </GridWapper>
  );
};

const CollectionList = ({ data, collectiondetailssetup }) => {
  return (
    <CollectionListWapper>
      <ListofCollection
        data={data}
        collectiondetailsAction={collectiondetailssetup}
      />
    </CollectionListWapper>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.intiReducer,
  };
};
export default connect(mapStateToProps, {
  collectiondetailssetup: collectionPhotoDetails,
})(CollectionList);
