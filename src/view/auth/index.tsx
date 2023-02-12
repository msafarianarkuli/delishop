import Login from "view/auth/login";
import AuthProvider from "view/auth/context/AuthProvider";
import Register from "view/auth/register";
import useAuth from "view/auth/hooks/useAuth";
import {useSession} from "next-auth/react";
import {useEffect} from "react";
import {useRouter} from "next/router";

function AuthStatus() {
  const {isRegister} = useAuth();
  if (isRegister) return <Register />;
  return <Login />;
}

function Auth() {
  const {status} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [router, status]);

  if (status === "loading" || status === "authenticated") return null;
  return (
    <AuthProvider>
      <AuthStatus />
    </AuthProvider>
  );
}

export default Auth;
