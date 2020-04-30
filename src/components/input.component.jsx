import React, { useState } from "react";
import styled from "styled-components";
import history from "../history";
import { connect } from "react-redux";
const Form = styled.form`
  height: 100%;
  display: flex;
  border: 1px solid ${(props) => props.theme.downbackcolor};
  padding: 0 1rem;
  border-radius: 17px;

  & > input[type="search"] {
    height: 100%;
    font-size: 2rem;
    padding: 0 1rem;
    border: none;
    color: white;
    background-color: transparent;
    @media ${(props) => props.theme.mediaQuery.mediaMid2} {
      padding: 0;
      font-size: 1.6rem;
    }
  }
  & img {
    width: 3.5rem;
    padding: 0 0.5rem;
  }
  & > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

const formHandler = (e, setState) => {
  e.preventDefault();
  e.persist();
  let userValue = e.target.firstElementChild.value;
  if (userValue !== "") {
    history.push(`/search/${userValue}/1`);
    setState("");
  }
};

const Input = ({
  type,
  children,
  aniclose,
  anitype,
  nlwel,
  nlwulel,
  nlclel,
}) => {
  const [state, setState] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.persist();
        formHandler(e, setState);
        anitype && aniclose(e, nlwel, nlwulel, nlclel);
      }}
    >
      <input
        type={type}
        placeholder="Search free images"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      {children && <button>{children}</button>}
    </Form>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(Input);
