import React from "react";
import * as Styled from "./upload.styles";
import { JobForm } from "./detailsform/JobForm";

export const JobPost: React.FC = () => {
  return (
    <Styled.DetailsWrapper>
      <JobForm />
    </Styled.DetailsWrapper>
  );
};
