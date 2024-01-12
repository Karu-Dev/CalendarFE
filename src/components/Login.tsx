import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Login: React.FC = () => {
    const [searchParams] = useSearchParams();
  useEffect(() => {
    const userId = searchParams.get('userId');
    const existingUser: string | null = window.localStorage.getItem("userId");
    if (existingUser) {
      window.location.href = "/";
    }
    if (!userId) {
      window.location.href = "/error";
    } else {
      localStorage.setItem("userId", userId);
      window.location.href = "/";
    }
    return () => {};
  }, [searchParams]);

  return <div className="Login">Logging in...</div>;
};

export default Login;
