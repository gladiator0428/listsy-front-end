import React from "react";
import * as Styled from "./singleSelection.styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const SingleSelection: React.FC = () => {
  return (
    <Styled.SelectFormItem>
      <p>Listing Type</p>
      <Styled.Select>
        <span className="placeholder">Select Lising Type</span>
        <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
      </Styled.Select>
      <Styled.SelectOptionWrapper>
        <p>Buying</p>
        <p>Renting</p>
        <p>Selling</p>
      </Styled.SelectOptionWrapper>
    </Styled.SelectFormItem>
  );
};
