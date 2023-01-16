import LoginPhoneNumber from "template/auth/login/LoginPhoneNumber";
import AuthHeader from "template/auth/component/AuthHeader";

function Login() {
  return (
    <>
      <AuthHeader title="ورود یا ثبت نام" />
      <div className="flex items-center justify-center w-full h-[calc(100vh-56px)]">
        <LoginPhoneNumber />
      </div>
    </>
  );
}

export default Login;
