import { AppLayout } from "@/layouts";
import { RegisterForm } from "@/modules/auth";
import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <AppLayout name="register">
      <RegisterForm />
    </AppLayout>
  );
};

export default RegisterPage;
