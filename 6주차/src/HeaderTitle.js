import React from "react";
import { TitleBig, TitleLogoDiv, TitleSmall } from "./styledComponents";

const HeaderTitle = ({ goHome }) => {
  return (
    <>
      <TitleLogoDiv onClick={goHome}>
        <TitleBig>멋사</TitleBig>
        <TitleSmall>게시판</TitleSmall>
      </TitleLogoDiv>
    </>
  );
};

export default React.memo(HeaderTitle);
