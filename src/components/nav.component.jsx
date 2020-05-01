import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TimelineLite, Power3 } from "gsap";
import { CSSPlugin } from "gsap";

import search from "../assets/search.svg";
import Input from "./input.component";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 2.8rem;
  font-weight: 900;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 20;
  background-color: #2d2d2d;
  box-shadow: 0 0 15px black;

  & a {
    text-decoration: none;
    color: white;
  }
`;

const NavListWapper = styled.div`
  position: fixed;
  width: 20vw;
  height: 100%;
  background-color: #2d2d2d;
  z-index: 30;
  right: 0;
  transform: translateX(110%);
  box-shadow: 0px 0px 20px black;
  @media ${(props) => props.theme.mediaQuery.mediaLarg2} {
    width: 25vw;
  }
  @media ${(props) => props.theme.mediaQuery.mediaMid2} {
    width: 40vw;
  }
  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    & > li:first-child {
      display: none;
      @media ${(props) => props.theme.mediaQuery.mediaMid3} {
        display: block;
        width: 90%;
        padding: 1rem 0;
      }
      & > form {
        @media ${(props) => props.theme.mediaQuery.mediaMid3} {
          padding: 0.5rem;
        }
        & > input {
          @media ${(props) => props.theme.mediaQuery.mediaMid3} {
            width: 80%;
            font-size: 1.6rem;
          }
        }
      }
    }
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
  color: white;
`;
const SearchandhandelbarWapper = styled.div`
  display: flex;
  & > * {
    margin: 0 2rem;
    @media ${(props) => props.theme.mediaQuery.mediaMid3} {
      margin: 0 1rem;
    }
  }
  & > form {
    @media ${(props) => props.theme.mediaQuery.mediaMid3} {
      display: none;
    }
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
      x: 0,
      ease: Power3.easeOut,
    },
    0.2,
    "start"
  );
};
const closeNavAnimation = (e, nlwel, nlwulel, nlclel) => {
  if (
    e.target.href ||
    e.target.title === "close" ||
    e.target.type === "submit"
  ) {
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
  let c = CSSPlugin;
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
            <Input
              type="search"
              aniclose={closeNavAnimation}
              nlwel={nlwel}
              nlwulel={nlwulel}
              nlclel={nlclel}
              anitype={true}
            >
              <img src={search} alt="Search" />
            </Input>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collections/1">Collections</Link>
          </li>
        </ul>
      </NavListWapper>
      <Nav>
        <Link to="/">PhotoHub</Link>
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
