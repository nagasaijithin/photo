import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";

import { init, searchImag } from "../actions";
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

const pageChangeHandeler = (e, initaction, actionto, match) => {
  e.persist();
  if (actionto) {
    initaction(Number(e.target.title));
    history.push(`/latestimages/${e.target.title}`);
  } else {
    let query = match.params.query;
    initaction(query, e.target.title);
    history.push(`/search/${query}/${e.target.title}`);
  }
};
const backpageHandeler = (e, match, initaction, actionto) => {
  let num = Number(match.params.id) <= 41 ? Number(match.params.id) : 41;
  if (num > 1) {
    if (actionto) {
      initaction(num - 1);
      history.push(`/latestimages/${num - 1}`);
    } else {
      let query = match.params.query;
      initaction(query, num - 1);
      history.push(`/search/${query}/${num - 1}`);
    }
  }
};
const nextpageHandeler = (e, match, initaction, actionto) => {
  let num = Number(match.params.id);
  if (num < 50) {
    if (actionto) {
      initaction(num + 1);
      history.push(`/latestimages/${num + 1}`);
    } else {
      let query = match.params.query;
      initaction(query, num + 1);
      history.push(`/search/${query}/${num + 1}`);
    }
  }
};

///////////////////////////////////////////////////////
//////////////////////// helper component
///////////////////////////////////////////
const NumbergridItem = ({ start, initaction, actionto, match }) => {
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
          onClick={(e) => pageChangeHandeler(e, initaction, actionto, match)}
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
  let actiontype = pagebartype === "initbar" ? props.init : props.searchImag;
  let actionto = pagebartype === "initbar" ? true : false;
  return (
    <Pagebarwapper>
      <div
        title="Backpage"
        onClick={(e) => backpageHandeler(e, match, actiontype, actionto)}
      >
        <img src={lessthan} alt="Backpage" />
      </div>
      <NumberGrid>
        <NumbergridItem
          initaction={actiontype}
          actionto={actionto}
          match={match}
          start={Number(match.params.id) <= 41 ? Number(match.params.id) : 41}
        />
      </NumberGrid>
      <div
        title="Nextpage"
        onClick={(e) => nextpageHandeler(e, match, actiontype, actionto)}
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
export default connect(mapStateToProps, { init, searchImag })(
  withRouter(Pagebar)
);
