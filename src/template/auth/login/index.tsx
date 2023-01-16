import LoginPhoneNumber from "template/auth/login/components/LoginPhoneNumber";
import AuthHeader from "template/auth/component/AuthHeader";
import useLogin from "template/auth/login/context/useLogin";
import LoginModalCode from "template/auth/login/components/LoginModalCode";

function Login() {
  const {isCode} = useLogin();
  return (
    <>
      <AuthHeader title="ورود یا ثبت نام" />
      <div className="flex items-center justify-center w-full h-[calc(100vh-56px)]">
        <LoginPhoneNumber />
      </div>
      <LoginModalCode open={isCode} />
    </>
  );
}

export default Login;
