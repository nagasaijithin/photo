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
  }
  & img {
    width: 3.5rem;
    padding: 0 0.5rem;
  }
  & > button {
    background-color: white;
    border: none;
    cursor: pointer;
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

const Input = ({ type, children }) => {
  const [state, setState] = useState("");

  return (
    <Form onSubmit={(e) => formHandler(e, setState)}>
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
