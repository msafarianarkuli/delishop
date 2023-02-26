import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import RegisterSubmit from "view/auth/register/components/RegisterSubmit";
import RegisterInput from "view/auth/register/components/RegisterInput";
import {createLog, iranPhoneNumberRegex} from "utils/utils";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// import {useRouter} from "next/router";

export interface IRegisterForm {
  name: string;
  introPhone: string;
}

function RegisterForm() {
  const {data} = useSession();
  const router = useRouter();
  const method = useForm<IRegisterForm>({
    mode: "all",
  });
  const {handleSubmit} = method;

  async function onSubmit(payload: IRegisterForm) {
    createLog("payload", payload);
    try {
      const body = {
        phone: data?.user.phone,
        name: payload.name,
      };
      const res = await axiosService({url: API.REGISTER_ADDED_NAME, method: "post", body, token: data?.user.token});
      const updateUrl = API.UPDATE_USER_SESSION + `?name=${encodeURI(payload.name)}`;
      const resUpdateSession = await axiosService({url: updateUrl, method: "get"});
      createLog("res RegisterForm", res);
      createLog("resUpdateSession RegisterForm", resUpdateSession);
      const callbackUrl = router.query?.callbackUrl;
      if (callbackUrl && !Array.isArray(callbackUrl)) {
        await router.replace(callbackUrl);
      } else {
        await router.replace("/");
      }
    } catch (e) {
      createLog("error RegisterForm", e);
    }
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
          <RegisterInput
            id="introPhone"
            numerical
            label="شماره معرف"
            classNameContainer="mt-10"
            rules={{
              validate: (value) => {
                if (value && !iranPhoneNumberRegex.test(value)) return "شماره تماس معرف را به صورت صحیح وارد کنید";
                return true;
              },
            }}
          />
          <RegisterSubmit />
        </form>
      </FormProvider>
    </div>
  );
}

export default RegisterForm;
