import LoginComponent from "@/components/login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Login',
};

const Login = () => {
  return (
    <div>
      <LoginComponent />
    </div>
  );
};

export default Login;
