import React, {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {CustomInputReactHook} from "components";
import {createLog, iranPhoneNumberRegex} from "utils/utils";
import {Button, InputRef} from "antd";
import useAuthFocus from "view/auth/hooks/useAuthFocus";
import useAuthBlur from "view/auth/hooks/useAuthBlur";
import useAuthAction from "view/auth/hooks/useAuthAction";
import {authSetCode} from "view/auth/context/AuthProvider";
import sendCode from "api/sendCode";

interface ILoginPhoneNumber {
  phone: string;
}

function LoginPhoneNumber() {
  const dispatch = useAuthAction();
  const inputRef = useRef<InputRef>(null);
  const {
    handleSubmit,
    control,
    formState: {isSubmitting},
  } = useForm<ILoginPhoneNumber>({
    mode: "all",
  });

  const focus = useAuthFocus("login-btn");
  const blur = useAuthBlur("login-btn");

  useEffect(() => {
    if (inputRef.current?.input) {
      const input = inputRef.current.input;

      input.addEventListener("focus", focus);
      input.addEventListener("blur", blur);

      return () => {
        input.removeEventListener("focus", focus);
        input.removeEventListener("blur", blur);
      };
    }
  }, [blur, focus]);

  async function onSubmit(payload: ILoginPhoneNumber) {
    createLog("payload", payload);
    try {
      const res = await sendCode(payload);
      createLog("res LoginPhoneNumber", res.data);
      dispatch(authSetCode(res.data.data.phone));
    } catch (e) {
      createLog("error LoginPhoneNumber", e);
    }
  }

  return (
    <div className="w-full h-full mx-screenSpace relative">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <CustomInputReactHook
          ref={inputRef}
          id="phone"
          control={control}
          classNameContainer="flex flex-col justify-center h-[50vh]"
          className="bg-transparent rounded-none border-0 border-b-[0.5px] placeholder-[#575F6B] border-[#2C3036] focus:shadow-none text-center text-[14px]"
          placeholder="شماره موبایل خود را وارد کنید"
          inputMode="decimal"
          numerical
          rules={{
            validate: (value) => {
              if (!value) return "شماره تماس خود را وارد کنید";
              if (!iranPhoneNumberRegex.test(value)) return "شماره تماس خود را به صورت صحیح وارد کنید";
              return true;
            },
          }}
        />
        <Button
          id="login-btn"
          htmlType="submit"
          type="primary"
          className="submit-btn absolute bottom-6 w-full"
          loading={isSubmitting}
        >
          ثبت
        </Button>
      </form>
    </div>
  );
}

export default LoginPhoneNumber;
