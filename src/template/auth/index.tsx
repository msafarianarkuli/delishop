import Login from "template/auth/login";
import AuthProvider from "template/auth/context/AuthProvider";
import Register from "template/auth/register";
import useAuth from "template/auth/hooks/useAuth";

function AuthStatus() {
  const {isRegister} = useAuth();
  if (isRegister) return <Register />;
  return <Login />;
}

function Auth() {
  return (
    <AuthProvider>
      <AuthStatus />
    </AuthProvider>
  );
}

export default Auth;
