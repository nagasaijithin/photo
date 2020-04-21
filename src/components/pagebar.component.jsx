import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import history from "../history";
import greaterthan from "../assets/greaterthan.svg";
import lessthan from "../assets/lessthan.svg";

const Pagebarwapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 2.5rem;
  height: 3rem;
  align-items: center;
  & > div:not(:nth-child(2)) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 1rem;
    background-color: ${(props) => props.theme.downbackcolor};
    border-radius: 4px;
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
    /* display: flex;
    justify-content: center;
    align-items: center; */
    cursor: pointer;
  }
`;

const NumbergridItem = ({ start }) => {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(start);
    start++;
  }
  return (
    <>
      {arr.map((ar, i) => (
        <div title={ar} onClick={(e) => pageChangeHandeler(e)} key={i}>
          {ar}
        </div>
      ))}
    </>
  );
};

const pageChangeHandeler = (e) => {
  e.persist();
  history.push(`/latestimages/${e.target.title}`);
};
const Pagebar = ({ match }) => {
  return (
    <Pagebarwapper>
      <div>
        <img src={lessthan} alt="" />
      </div>
      <NumberGrid>
        <NumbergridItem start={Number(match.params.id)} />
      </NumberGrid>
      <div>
        <img src={greaterthan} alt="" />
      </div>
    </Pagebarwapper>
  );
};

export default withRouter(Pagebar);
