import React from "react";
import * as Styled from "./details.styles";
import { SingleSelection } from "@/components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const EstateForm: React.FC = () => {
  return (
    <Styled.FormContainer>
      <Styled.TextAreaFormItem height={80}>
        <p>{"Title (required)"}</p>
        <textarea placeholder="Tell viewer about your video title."></textarea>
        <span>0 / 100</span>
      </Styled.TextAreaFormItem>
      <Styled.TextAreaFormItem height={80}>
        <p>{"Subtitle (required)"}</p>
        <textarea placeholder="Tell viewer about your video Subtitle."></textarea>
        <span>0 / 100</span>
      </Styled.TextAreaFormItem>
      <Styled.TextAreaFormItem height={120}>
        <p>{"Description"}</p>
        <textarea placeholder="Tell viewer about your video."></textarea>
        <span>0 / 5000</span>
      </Styled.TextAreaFormItem>
      <SingleSelection />
      <Styled.SelectFormItem>
        <p>Property Type</p>
        <Styled.Select>
          <span className="placeholder">Select Property Type</span>
          <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
        </Styled.Select>
      </Styled.SelectFormItem>
      <Styled.SelectFormItem>
        <p>Bedrooms</p>
        <Styled.Select>
          <span className="placeholder">Select Bedrooms</span>
          <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
        </Styled.Select>
      </Styled.SelectFormItem>
      <Styled.SelectFormItem>
        <p>Bathrooms</p>
        <Styled.Select>
          <span className="placeholder">Select Bathrooms</span>
          <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
        </Styled.Select>
      </Styled.SelectFormItem>
      <Styled.SelectFormItem>
        <p>Tenure</p>
        <Styled.Select>
          <span className="placeholder">Select Tenure</span>
          <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
        </Styled.Select>
      </Styled.SelectFormItem>
      <Styled.SelectFormItem>
        <p>Property Condition</p>
        <Styled.Select>
          <span className="placeholder">Select Property Condition</span>
          <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
        </Styled.Select>
      </Styled.SelectFormItem>
      <Styled.InputFormItem>
        <input type="text" placeholder="Post Code / Zip Code" />
      </Styled.InputFormItem>
      <Styled.InputFormItem>
        <input type="text" placeholder="Year Built" />
      </Styled.InputFormItem>
      <Styled.InputFormItem>
        <input type="text" placeholder="Built Surface" />
      </Styled.InputFormItem>
      <Styled.InputFormItem>
        <input type="text" placeholder="Plot Surface" />
      </Styled.InputFormItem>
      <Styled.SelectFormItem>
        <p>Key Features</p>
        <Styled.Select>
          <span className="placeholder">Select Key Features</span>
          <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
        </Styled.Select>
      </Styled.SelectFormItem>
      <Styled.SelectFormItem>
        <p>Nearest Top Attractions</p>
        <Styled.Select>
          <span className="placeholder">Select Nearest Top Attractions</span>
          <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
        </Styled.Select>
      </Styled.SelectFormItem>
      <Styled.SelectFormItem>
        <p>Facilities</p>
        <Styled.Select>
          <span className="placeholder">Select Facilities</span>
          <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
        </Styled.Select>
      </Styled.SelectFormItem>
      <Styled.SaveButton>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
