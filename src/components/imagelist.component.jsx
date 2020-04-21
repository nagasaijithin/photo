import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import download from "../assets/download.svg";
///////////////////////////////////////////////
///////// all styles components
//////////////////////////////////////////////

const UserWapper = styled.div`
  height: 50px;
  width: ${(props) => props.imgwidth}px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div:first-child {
    display: flex;
    align-items: center;
    height: 100%;
    & img {
      height: 60%;
      border-radius: 50%;
      padding: 1px;
    }
  }
  & div:last-child {
    height: 61%;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.downbackcolor};
    border-radius: 4px;
    & img {
      height: 100%;
    }
  }
`;

const MainWapper = styled.div`
  text-align: center;
  width: 100%;
`;

///////////////////////////////////////////////
///////// main ImageList component
//////////////////////////////////////////////
const Imagelist = (props) => {
  let { url, user, alt, dimg } = props;
  const [state, setstate] = useState(0);

  let iel = useRef(null);
  let icel = useRef(null);

  useEffect(() => {
    icel.style.gridRowEnd = `span ${Math.ceil(iel.height / 10 + 6)}`;
    setstate(iel.width);
  }, [iel, icel]);
  return (
    <MainWapper ref={(el) => (icel = el)}>
      <img
        src={url}
        alt={alt}
        ref={(el) => (iel = el)}
        style={{ width: "100%" }}
      />
      <UserWapper imgwidth={state}>
        <div>
          <img src={user.profile_image.medium} alt={user.name} />
          <h3>{user.name}</h3>
        </div>
        <div>
          <a href={`${dimg}?force=true`} download>
            <img src={download} alt="download" />
          </a>
        </div>
      </UserWapper>
    </MainWapper>
  );
};

export default Imagelist;