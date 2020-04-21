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
  width: 100%;
  height: 100vh;
  background-color: #2d2d2d;
  z-index: 20;
  transform: translateY(-100%);
  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    & li {
      list-style-type: none;
      padding: 2rem;
      transform: translateY(5rem);
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
////////////////////////////////////////////////////////////
//////////////////// Nav Animation
/////////////////////////////////////////////////
const navAnimation = (nlwel, nlwulel) => {
  let tl = new TimelineLite();
  tl.to(nlwel, 1, {
    opacity: 1,
    y: 0,
    ease: Power3.easeOut,
  });

  tl.staggerTo(
    [...Array.from(nlwulel.children)],
    1,
    {
      opacity: 1,
      y: -30,
      ease: Power3.easeOut,
    },
    0.2
  );
};
const closeNavAnimation = (e, nlwel, nlwulel) => {
  if (e.target.href) {
    let tl = new TimelineLite();
    tl.staggerTo(
      [...Array.from(nlwulel.children)],
      1,
      {
        opacity: 0,
        y: 30,
        ease: Power3.easeOut,
      },
      -0.2
    );
    tl.to(nlwel, 1, {
      opacity: 1,
      y: "-100%",
      ease: Power3.easeOut,
    });
  }
};
const NavBar = () => {
  let nlwel = useRef(null);
  let nlwulel = useRef(null);
  return (
    <>
      <NavListWapper ref={(el) => (nlwel = el)}>
        <ul
          ref={(el) => (nlwulel = el)}
          onClick={(e) => closeNavAnimation(e, nlwel, nlwulel)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Collections">Collections</Link>
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
          <Handbar onClick={() => navAnimation(nlwel, nlwulel)}>|||</Handbar>
        </SearchandhandelbarWapper>
      </Nav>
    </>
  );
};
export default NavBar;
