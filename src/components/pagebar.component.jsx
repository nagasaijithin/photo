import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";

import greaterthan from "../assets/greaterthan.svg";
import lessthan from "../assets/lessthan.svg";

///////////////////////////////////////////////////////
//////////////////////// style components
///////////////////////////////////////////
const Pagebarwapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 2.5rem;
  height: 3rem;
  align-items: center;
  margin: 2rem;
  @media ${(props) => props.theme.mediaQuery.mediaMid1} {
    margin: 2rem 0.5rem;
    font-size: 2rem;
  }

  & > div:not(:nth-child(2)) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 1rem;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease-out;
    @media ${(props) => props.theme.mediaQuery.mediaMid1} {
      height: 90%;
    }
    @media ${(props) => props.theme.mediaQuery.mediaMid3} {
      height: 85%;
    }
    &:hover {
      background-color: ${(props) => props.theme.downbackcolor};
    }
    & img {
      height: 80%;
    }
  }
`;
const NumberGrid = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  height: 110%;
  @media ${(props) => props.theme.mediaQuery.mediaMid1} {
    height: 100%;
  }
  & div {
    padding: 0 1rem;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease-out;
    @media ${(props) => props.theme.mediaQuery.mediaMid1} {
      padding: 0 0.6rem;
    }
    &:hover {
      background-color: ${(props) => props.theme.downbackcolor};
    }
  }
`;

///////////////////////////////////////////////////////
//////////////////////// event handlers
///////////////////////////////////////////

const pageChangeHandeler = (e, pagebartype, match) => {
  e.persist();
  if (pagebartype === "initbar") {
    history.push(`/latestimages/${e.target.title}`);
  } else if (pagebartype === "searchbar") {
    let query = match.params.query;
    history.push(`/search/${query}/${e.target.title}`);
  } else {
    history.push(`/collections/${e.target.title}`);
  }
};
const backpageHandeler = (e, match, pagebartype) => {
  let num = Number(match.params.id) <= 41 ? Number(match.params.id) : 41;
  if (num > 1) {
    if (pagebartype === "initbar") {
      history.push(`/latestimages/${num - 1}`);
    } else if (pagebartype === "searchbar") {
      let query = match.params.query;
      history.push(`/search/${query}/${num - 1}`);
    } else {
      history.push(`/collections/${num - 1}`);
    }
  }
};
const nextpageHandeler = (e, match, pagebartype) => {
  let num = Number(match.params.id);
  if (num < 50) {
    if (pagebartype === "initbar") {
      history.push(`/latestimages/${num + 1}`);
    } else if (pagebartype === "searchbar") {
      let query = match.params.query;
      history.push(`/search/${query}/${num + 1}`);
    } else {
      history.push(`/collections/${num + 1}`);
    }
  }
};

///////////////////////////////////////////////////////
//////////////////////// helper component
///////////////////////////////////////////
const NumbergridItem = ({ start, pagebartype, match }) => {
  let arr = [];

  for (let i = 1; i <= 10; i++) {
    arr.push(start);
    start++;
  }

  return (
    <>
      {arr.map((ar, i) => (
        <div
          title={ar}
          onClick={(e) => pageChangeHandeler(e, pagebartype, match)}
          key={i}
        >
          {ar}
        </div>
      ))}
    </>
  );
};
////////////////////////////////////////////////////////////////////
////////////////////////////////main component
//////////////////////////////////////////////////////
const Pagebar = ({ match, pagebartype }) => {
  return (
    <Pagebarwapper>
      <div
        title="Backpage"
        onClick={(e) => backpageHandeler(e, match, pagebartype)}
      >
        <img src={lessthan} alt="Backpage" />
      </div>
      <NumberGrid>
        <NumbergridItem
          pagebartype={pagebartype}
          match={match}
          start={Number(match.params.id) <= 41 ? Number(match.params.id) : 41}
        />
      </NumberGrid>
      <div
        title="Nextpage"
        onClick={(e) => nextpageHandeler(e, match, pagebartype)}
      >
        <img src={greaterthan} alt="Nextpage" />
      </div>
    </Pagebarwapper>
  );
};
const mapStateToProps = (state) => {
  return {
    allimages: state,
  };
};
export default connect(mapStateToProps)(withRouter(Pagebar));
