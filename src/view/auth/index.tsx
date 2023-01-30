import Login from "view/auth/login";
import AuthProvider from "view/auth/context/AuthProvider";
import Register from "view/auth/register";
import useAuth from "view/auth/hooks/useAuth";

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
