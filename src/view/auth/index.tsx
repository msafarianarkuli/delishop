import Login from "view/auth/login";
import AuthProvider, {authRegister} from "view/auth/context/AuthProvider";
import Register from "view/auth/register";
import useAuth from "view/auth/hooks/useAuth";
import {useSession} from "next-auth/react";
import {useEffect} from "react";
import {useRouter} from "next/router";
import useAuthAction from "view/auth/hooks/useAuthAction";

function AuthStatus() {
  const {status, data} = useSession();
  const router = useRouter();
  const {isRegister} = useAuth();
  const dispatch = useAuthAction();

  useEffect(() => {
    if (status === "authenticated" && !data?.user.name) {
      dispatch(authRegister());
    }
  }, [data?.user.name, dispatch, router, status]);

  if (isRegister) return <Register />;
  return <Login />;
}

function Auth() {
  const {status, data} = useSession();
  const router = useRouter();

  useEffect(() => {
    const callbackUrl = router.query?.callbackUrl;
    if (status === "authenticated" && data?.user.name) {
      if (callbackUrl && !Array.isArray(callbackUrl)) {
        router.replace(decodeURI(callbackUrl));
      } else {
        router.replace("/");
      }
    }
  }, [data?.user.name, router, status]);

  if (status === "loading") return null;
  if (status === "authenticated" && data?.user.name) return null;
  return (
    <AuthProvider>
      <AuthStatus />
    </AuthProvider>
  );
}

export default Auth;
