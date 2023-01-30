import React from "react";
import {Button} from "antd";
import {useFormContext} from "react-hook-form";
import {IRegisterForm} from "view/auth/register/components/RegisterForm";

function RegisterSubmit() {
  const {
    formState: {isSubmitting},
  } = useFormContext<IRegisterForm>();
  return (
    <>
      <Button
        id="register-btn"
        htmlType="submit"
        type="primary"
        className="fixed submit-btn bottom-[40px] right-[19px] left-[19px]"
        loading={isSubmitting}
      >
        ورود
      </Button>
    </>
  );
}

export default RegisterSubmit;
