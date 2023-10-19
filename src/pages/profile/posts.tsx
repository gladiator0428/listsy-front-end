import React from "react";
import { AppLayout } from "@/layouts";
import { MainSection } from "@/modules/profile/MainSection";

const MyPostPage: React.FC = () => {
  return (
    <AppLayout name="myPosts">
      <MainSection page="posts" />
    </AppLayout>
  );
};

export default MyPostPage;
