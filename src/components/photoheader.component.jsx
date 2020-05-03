import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HeaderWapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserandDownloadwapper = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-around;

  align-items: center;
`;
const UserWapper = styled.div`
  display: flex;
  padding: 1rem;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.mediaQuery.mediaMid2} {
    width: 50%;
    justify-content: flex-start;
  }
  & > div {
    width: 5rem;
    height: 100%;
    margin: 1rem;
    & > img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
`;
const DownloadWapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > a {
    padding: 1rem 2rem;
    background: #6495ed;
    font-size: 1.4rem;
    font-weight: 900;
    border-radius: 20px;
    color: black;
    text-decoration: none;
    transition: all 0.9s ease-in;
    &:hover {
      background: rgba(100, 149, 237, 0.68);
    }
  }
`;
const MainimgWapper = styled.div`
  height: 70vh;
  text-align: center;
  & > img {
    height: 100%;
    max-width: 80%;
    object-fit: contain;
  }
`;

const TagesWapper = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.4rem;
  flex-wrap: wrap;
  & > a {
    padding: 1rem;
    margin: 1rem;
    color: black;
    text-decoration: none;
    transition: all 0.6s ease-in;
    background-color: ${(props) => props.theme.downbackcolor};
    border-radius: 20px;
    &:hover {
      background-color: white;
    }
  }
`;
const PhotoHeader = ({ state }) => {
  let { mainphoto } = state;
  let Alltags =
    mainphoto && mainphoto.tags.filter(({ type }) => type === "search");
  return (
    <HeaderWapper>
      {mainphoto && (
        <>
          <UserandDownloadwapper>
            <UserWapper>
              <div>
                <img
                  src={mainphoto.user.profile_image.medium}
                  alt={mainphoto.user.name}
                />
              </div>
              <h2>{mainphoto.user.name}</h2>
            </UserWapper>
            <DownloadWapper>
              <a href={`${mainphoto.links.download}?force=true`} download>
                Download
              </a>
            </DownloadWapper>
          </UserandDownloadwapper>
          <MainimgWapper>
            <img src={mainphoto.urls.regular} alt={mainphoto.alt_description} />
          </MainimgWapper>
          <TagesWapper>
            {Alltags.map(({ title }, i) => (
              <Link to={`/search/${title}/1`} key={i}>
                #{title}
              </Link>
            ))}
          </TagesWapper>
        </>
      )}
    </HeaderWapper>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.photoandrelated,
  };
};
export default connect(mapStateToProps)(PhotoHeader);
