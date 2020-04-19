import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TimelineLite, Power3 } from "gsap";
const Nav = styled.nav`
  max-width: 150rem;
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
  & div {
    transform: rotate(90deg);
    cursor: pointer;
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
        <div onClick={() => navAnimation(nlwel, nlwulel)}>|||</div>
      </Nav>
    </>
  );
};
export default NavBar;
