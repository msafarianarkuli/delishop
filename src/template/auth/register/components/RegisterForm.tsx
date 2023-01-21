import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import RegisterSubmit from "template/auth/register/components/RegisterSubmit";
import RegisterInput from "template/auth/register/components/RegisterInput";
import {createLog} from "utils/utils";

export interface IRegisterForm {
  name: string;
  introCode: string;
}

function RegisterForm() {
  const method = useForm<IRegisterForm>({
    mode: "all",
  });
  const {handleSubmit} = method;

  function onSubmit(payload: IRegisterForm) {
    createLog("payload", payload);
  }

  return (
    <div className="mx-screenSpace">
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <RegisterInput
            id="name"
            label="نام و نام خانوادگی"
            classNameContainer="pt-5"
            rules={{
              validate: (value) => {
                if (!value) return "نام و نام خانوادگی خود را وارد کنید";
                return true;
              },
            }}
          />
          <RegisterInput id="introCode" label="کد معرف" classNameContainer="mt-10" />
          <RegisterSubmit />
        </form>
      </FormProvider>
    </div>
  );
}

export default RegisterForm;
