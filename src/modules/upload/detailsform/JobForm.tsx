import React, { useState } from "react";
import * as Styled from "./details.styles";

export const JobForm: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    description: "",
    listingType: "",
    propertyType: "",
    bedroomCount: "",
    bathroomCount: "",
    tenure: "",
    propertyCondition: "",
    postCode: "",
    yearBuilt: "",
    builtSurface: "",
    builtSurfaceUnit: "sqft",
    plotSurface: "",
    plotSurfaceUnit: "sqft",
    keyFeatures: [] as string[],
    nearestAttraction: [] as string[],
    facilities: [] as string[],
  });

  return (
    <Styled.FormContainer>
      <Styled.TextAreaFormItem height={80}>
        <p>{"Title (required)"}</p>
        <textarea
          placeholder="Tell viewer about your video title."
          onChange={(e) =>
            e.target.value.length <= 100 &&
            setForm((prev) => ({ ...prev, title: e.target.value }))
          }
          value={form.title}
        ></textarea>
        <span>{form.title.length} / 100</span>
      </Styled.TextAreaFormItem>
    </Styled.FormContainer>
  );
};
