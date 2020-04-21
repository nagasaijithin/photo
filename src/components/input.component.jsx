import React, { useState } from "react";
import styled from "styled-components";
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
`;
const Input = ({ type, children }) => {
  const [state, setState] = useState("");
  return (
    <Form>
      <input
        type={type}
        placeholder="Search free images"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      {children && children}
    </Form>
  );
};

export default Input;
