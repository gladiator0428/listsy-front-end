import React from "react";
import * as Styled from "./upload.styles";
import VideoPlayer from "react-video-js-player";

type Props = {
  adLink: string;
  category: string;
};

export const Details: React.FC<Props> = ({ adLink, category }) => {
  return (
    <Styled.DetailsWrapper>
      <Styled.DetailsFormWrapper>{category}</Styled.DetailsFormWrapper>
      <Styled.DetailsPreviewWrapper>
        <video src={adLink} />
      </Styled.DetailsPreviewWrapper>
    </Styled.DetailsWrapper>
  );
};
