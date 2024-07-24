import RegisterComponent from "@/components/auth/register";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Register',
};

const Register = () => {
  return (
    <div className="pt-16">
      <RegisterComponent />
    </div>
  );
};

export default Register;