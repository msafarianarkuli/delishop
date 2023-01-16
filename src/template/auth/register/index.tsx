import AuthHeader from "template/auth/component/AuthHeader";
import RegisterForm from "template/auth/register/components/RegisterForm";

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
