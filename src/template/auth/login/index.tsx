import LoginPhoneNumber from "template/auth/login/components/LoginPhoneNumber";
import AuthHeader from "template/auth/component/AuthHeader";
import LoginCode from "template/auth/login/components/LoginCode";

function Login() {
  return (
    <>
      <AuthHeader title="ورود یا ثبت نام" />
      <div className="flex items-center justify-center w-full h-[calc(100vh-56px)]">
        <LoginPhoneNumber />
      </div>
      <LoginCode />
    </>
  );
}

export default Login;
