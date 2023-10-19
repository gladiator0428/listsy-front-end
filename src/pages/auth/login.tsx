import React from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/auth";

const LoginPage: React.FC = () => {
  return (
    <AppLayout name="login">
      <Section.LoginForm />
    </AppLayout>
  );
};

export default LoginPage;
