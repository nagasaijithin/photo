import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TimelineLite, Power3 } from "gsap";

import search from "../assets/search.svg";
import Input from "./input.component";
const Nav = styled.nav`
  max-width: ${(props) => props.theme.continer};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
  font-size: 3rem;
  font-weight: 900;
  & a {
    text-decoration: none;
    color: black;
  }
`;
const NavListWapper = styled.div`
  position: fixed;
  width: 20%;
  height: 100%;
  background-color: #2d2d2d;
  z-index: 20;
  right: 0;
  transform: translateX(110%);
  box-shadow: 0px 0px 20px black;
  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    & li {
      list-style-type: none;
      padding: 2rem;
      transform: translateX(5rem);
      opacity: 0;
      & a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;
const Handbar = styled.div`
  transform: rotate(90deg);
  cursor: pointer;
`;
const SearchandhandelbarWapper = styled.div`
  display: flex;
  & > * {
    margin: 0 2rem;
  }
`;
const CloseButton = styled.div`
  color: white;
  font-size: 2.2rem;
  font-weight: 900;
  position: absolute;
  right: 0;
  padding: 2rem;
  cursor: pointer;
  opacity: 0;
`;
////////////////////////////////////////////////////////////
//////////////////// Nav Animation
/////////////////////////////////////////////////
const navAnimation = (nlwel, nlwulel, nlclel) => {
  let tl = new TimelineLite();
  tl.to(nlwel, 1, {
    opacity: 1,
    x: 0,
    ease: Power3.easeOut,
  }).to(
    nlclel,
    1,
    {
      opacity: 1,
      ease: Power3.easeOut,
    },
    "start"
  );
  tl.staggerTo(
    [...Array.from(nlwulel.children)],
    1,
    {
      opacity: 1,
      x: -10,
      ease: Power3.easeOut,
    },
    0.2,
    "start"
  );
};
const closeNavAnimation = (e, nlwel, nlwulel, nlclel) => {
  if (e.target.href || e.target.title === "close") {
    let tl = new TimelineLite();
    tl.staggerTo(
      [...Array.from(nlwulel.children)],
      1,
      {
        opacity: 0,
        x: 10,
        ease: Power3.easeOut,
      },
      -0.2,
      "start"
    );
    tl.to(
      nlclel,
      1,
      {
        opacity: 0,
        ease: Power3.easeOut,
      },
      "start"
    ).to(nlwel, 1, {
      opacity: 1,
      x: "110%",
      ease: Power3.easeOut,
    });
  }
};
const NavBar = () => {
  let nlwel = useRef(null);
  let nlwulel = useRef(null);
  let nlclel = useRef(null);
  return (
    <>
      <NavListWapper ref={(el) => (nlwel = el)}>
        <CloseButton
          title="close"
          onClick={(e) => closeNavAnimation(e, nlwel, nlwulel, nlclel)}
          ref={(el) => (nlclel = el)}
        >
          X
        </CloseButton>
        <ul
          ref={(el) => (nlwulel = el)}
          onClick={(e) => closeNavAnimation(e, nlwel, nlwulel, nlclel)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </NavListWapper>
      <Nav>
        <Link to="/">Logo</Link>
        <SearchandhandelbarWapper>
          <Input type="search">
            <img src={search} alt="Search" />
          </Input>
          <Handbar onClick={() => navAnimation(nlwel, nlwulel, nlclel)}>
            |||
          </Handbar>
        </SearchandhandelbarWapper>
      </Nav>
    </>
  );
};
export default NavBar;
