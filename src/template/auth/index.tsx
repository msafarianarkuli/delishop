import Login from "template/auth/login";
import LoginProvider from "template/auth/login/context/LoginProvider";

function Auth() {
  return (
    <>
      <LoginProvider>
        <Login />
      </LoginProvider>
      {/*<Register />*/}
    </>
  );
}

export default Auth;
