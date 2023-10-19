import React from "react";
import { AppLayout } from "@/layouts";
import { ResendEmailForm } from "@/modules/auth/resend-email";
import { useRouter } from "next/router";

const ResentEmailPage: React.FC = () => {
  const router = useRouter();
  const { email } = router.query;
  return (
    <AppLayout name="">
      <ResendEmailForm email={email} />
    </AppLayout>
  );
};

export default ResentEmailPage;
