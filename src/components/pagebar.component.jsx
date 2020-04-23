import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";

import { init, searchImag, collections } from "../actions";
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
    &:hover {
      background-color: ${(props) => props.theme.downbackcolor};
    }
    & img {
      height: 80%;
    }
  }
`;
const NumberGrid = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 110%;
  & div {
    padding: 0 1rem;
    margin: 0 1.5rem;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease-out;
    &:hover {
      background-color: ${(props) => props.theme.downbackcolor};
    }
  }
`;

///////////////////////////////////////////////////////
//////////////////////// event handlers
///////////////////////////////////////////

const pageChangeHandeler = (e, initaction, pagebartype, match) => {
  e.persist();
  if (pagebartype === "initbar") {
    initaction(Number(e.target.title));
    history.push(`/latestimages/${e.target.title}`);
  } else if (pagebartype === "searchbar") {
    let query = match.params.query;
    initaction(query, e.target.title);
    history.push(`/search/${query}/${e.target.title}`);
  } else {
    initaction(e.target.title);
    history.push(`/collections/${e.target.title}`);
  }
};
const backpageHandeler = (e, match, initaction, pagebartype) => {
  let num = Number(match.params.id) <= 41 ? Number(match.params.id) : 41;
  if (num > 1) {
    if (pagebartype === "initbar") {
      initaction(num - 1);
      history.push(`/latestimages/${num - 1}`);
    } else if (pagebartype === "searchbar") {
      let query = match.params.query;
      initaction(query, num - 1);
      history.push(`/search/${query}/${num - 1}`);
    } else {
      initaction(num - 1);
      history.push(`/collections/${num - 1}`);
    }
  }
};
const nextpageHandeler = (e, match, initaction, pagebartype) => {
  let num = Number(match.params.id);
  if (num < 50) {
    if (pagebartype === "initbar") {
      initaction(num + 1);
      history.push(`/latestimages/${num + 1}`);
    } else if (pagebartype === "searchbar") {
      let query = match.params.query;
      initaction(query, num + 1);
      history.push(`/search/${query}/${num + 1}`);
    } else {
      initaction(num + 1);
      history.push(`/collections/${num + 1}`);
    }
  }
};

///////////////////////////////////////////////////////
//////////////////////// helper component
///////////////////////////////////////////
const NumbergridItem = ({ start, initaction, pagebartype, match }) => {
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
          onClick={(e) => pageChangeHandeler(e, initaction, pagebartype, match)}
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
const Pagebar = ({ match, pagebartype, ...props }) => {
  let actiontype;
  if (pagebartype === "initbar") {
    actiontype = props.init;
  } else if (pagebartype === "searchbar") {
    actiontype = props.searchImag;
  } else {
    actiontype = props.collections;
  }
  return (
    <Pagebarwapper>
      <div
        title="Backpage"
        onClick={(e) => backpageHandeler(e, match, actiontype, pagebartype)}
      >
        <img src={lessthan} alt="Backpage" />
      </div>
      <NumberGrid>
        <NumbergridItem
          initaction={actiontype}
          pagebartype={pagebartype}
          match={match}
          start={Number(match.params.id) <= 41 ? Number(match.params.id) : 41}
        />
      </NumberGrid>
      <div
        title="Nextpage"
        onClick={(e) => nextpageHandeler(e, match, actiontype, pagebartype)}
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
export default connect(mapStateToProps, { init, searchImag, collections })(
  withRouter(Pagebar)
);
