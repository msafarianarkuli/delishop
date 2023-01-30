import AuthHeader from "view/auth/component/AuthHeader";
import RegisterForm from "view/auth/register/components/RegisterForm";

function Register() {
  return (
    <>
      <AuthHeader title="ثبت نام" />
      <div className="w-full h-[calc(100vh-56px)]">
        <RegisterForm />
      </div>
    </>
  );
}

export default Register;
