import React from "react";
import { seo_lists } from "./seo";
import { Seo } from "@/components";
import * as Styled from "./layout.styles";
import { Header } from "./Header";

type Props = {
  name: string;
  title?: string;
  description?: string;
  image?: string;
} & React.HTMLAttributes<HTMLElement>;

export const AppLayout: React.FC<Props> = ({
  children,
  name,
  title,
  description,
  image,
}) => {
  const getSeoList = () => {
    if (seo_lists[name]) {
      return seo_lists[name];
    } else if (name === "details") {
      return {
        title: "Parasol Finance | " + title,
        description: description,
        image: image,
      };
    } else {
      return {
        title: "",
        description: "",
        image: "",
      };
    }
  };

  const props = getSeoList();

  return (
    <Styled.AppLayoutWrapper>
      <Seo {...props} />
      <Header />
      <>{children}</>
    </Styled.AppLayoutWrapper>
  );
};
