import React, {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {CustomInputReactHook} from "components";
import {createLog, iranPhoneNumberRegex} from "utils/utils";
import {Button, InputRef} from "antd";
import useAuthFocus from "template/auth/hooks/useAuthFocus";
import useAuthBlur from "template/auth/hooks/useAuthBlur";
import {sendCode} from "api";
import useLoginAction from "template/auth/login/context/useLoginAction";
import {loginSetCode} from "template/auth/login/context/LoginProvider";

interface ILoginPhoneNumber {
  phone: string;
}

function LoginPhoneNumber() {
  const dispatch = useLoginAction();
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
    dispatch(loginSetCode(payload.phone));
    return true;
    try {
      const res = await sendCode(payload);
      createLog("res LoginPhoneNumber", res.data);
    } catch (e) {
      createLog("error LoginPhoneNumber", e);
    }
  }

  return (
    <div className="w-full h-full sizeScreen">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <CustomInputReactHook
          ref={inputRef}
          id="phone"
          control={control}
          classNameContainer="flex flex-col justify-center h-[50vh]"
          className="bg-transparent rounded-none border-0 border-b focus:shadow-none text-center text-[14px]"
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
          className="fixed submit-btn bottom-[40px] right-[19px] left-[19px]"
          loading={isSubmitting}
        >
          ثبت
        </Button>
      </form>
    </div>
  );
}

export default LoginPhoneNumber;
