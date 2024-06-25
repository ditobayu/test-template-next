import { signIn } from "@/auth";
import { LoginForm } from "@/components/auth/login-form";
import { AuthError } from "next-auth";

const LoginPage = async () => {
  return <LoginForm />;
};

export default LoginPage;
