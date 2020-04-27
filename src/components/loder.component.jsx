import React from "react";
import styled, { keyframes } from "styled-components";
const ellipsis1 = keyframes`
0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }`;
const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }`;
const ellipsis3 = keyframes`
   0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }`;
const LoaderWapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2d2d2d;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;
const Mainloader = styled.div`
  width: 10%;
  height: 10%;
  /* background-color: white; */
  display: inline-block;
  position: relative;
  & div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 8px;
    animation: ${ellipsis1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: ${ellipsis3} 0.6s infinite;
  }
`;
const MainLoder = () => {
  return (
    <LoaderWapper>
      <Mainloader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Mainloader>
    </LoaderWapper>
  );
};

export default MainLoder;
