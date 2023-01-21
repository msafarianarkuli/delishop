import LoginPhoneNumber from "template/auth/login/components/LoginPhoneNumber";
import AuthHeader from "template/auth/component/AuthHeader";
import useAuth from "template/auth/hooks/useAuth";
import LoginModalCode from "template/auth/login/components/LoginModalCode";

function Login() {
  const {isCode} = useAuth();
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
