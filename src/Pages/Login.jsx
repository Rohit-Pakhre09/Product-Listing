import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Login - Urban Cart";
  }, []);
  return <div>Login</div>;
};

export default Login;
