import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";

import { init } from "../actions";
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
    background-color: ${(props) => props.theme.downbackcolor};
    border-radius: 4px;
    cursor: pointer;
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
    background-color: ${(props) => props.theme.downbackcolor};
    border-radius: 4px;
    cursor: pointer;
  }
`;

///////////////////////////////////////////////////////
//////////////////////// event handlers
///////////////////////////////////////////

const pageChangeHandeler = (e, initstate) => {
  e.persist();
  initstate(Number(e.target.title));
  history.push(`/latestimages/${e.target.title}`);
};
const backpageHandeler = (e, match, init) => {
  let num = Number(match.params.id) <= 41 ? Number(match.params.id) : 41;
  if (num > 1) {
    history.push(`/latestimages/${num - 1}`);
    init(num - 1);
  }
};
const nextpageHandeler = (e, match, init) => {
  let num = Number(match.params.id);
  if (num < 50) {
    history.push(`/latestimages/${num + 1}`);
    init(num + 1);
  }
};

///////////////////////////////////////////////////////
//////////////////////// helper component
///////////////////////////////////////////
const NumbergridItem = ({ start, initstate }) => {
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
          onClick={(e) => pageChangeHandeler(e, initstate)}
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
const Pagebar = ({ match, ...props }) => {
  return (
    <Pagebarwapper>
      <div
        title="Backpage"
        onClick={(e) => backpageHandeler(e, match, props.init)}
      >
        <img src={lessthan} alt="Backpage" />
      </div>
      <NumberGrid>
        <NumbergridItem
          initstate={props.init}
          start={Number(match.params.id) <= 41 ? Number(match.params.id) : 41}
        />
      </NumberGrid>
      <div
        title="Nextpage"
        onClick={(e) => nextpageHandeler(e, match, props.init)}
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
export default connect(mapStateToProps, { init })(withRouter(Pagebar));
