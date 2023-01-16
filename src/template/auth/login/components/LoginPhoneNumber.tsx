import React, {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {CustomInputReactHook} from "components";
import {createLog, iranPhoneNumberRegex} from "utils/utils";
import {Button, InputRef} from "antd";

interface ILoginPhoneNumber {
  phoneNumber: string;
}

function LoginPhoneNumber() {
  const inputRef = useRef<InputRef>(null);
  const submitBtn = useRef<HTMLButtonElement>(null);
  const {
    handleSubmit,
    control,
    formState: {isSubmitting},
  } = useForm<ILoginPhoneNumber>({
    mode: "all",
  });

  useEffect(() => {
    const btn = submitBtn.current;

    function focus() {
      if (btn?.classList.contains("bottom-[40px]")) {
        btn.classList.remove("bottom-[40px]");
        btn.classList.add("bottom-0");
        btn.classList.add("rounded-none");
      }
      if (btn?.classList.contains("left-[19px]")) {
        btn.classList.remove("left-[19px]");
        btn.classList.add("left-0");
      }
      if (btn?.classList.contains("right-[19px]")) {
        btn.classList.remove("right-[19px]");
        btn.classList.add("right-0");
      }
    }

    function blur() {
      if (btn?.classList.contains("bottom-0")) {
        btn.classList.remove("bottom-0");
        btn.classList.remove("rounded-none");
        btn.classList.add("bottom-[40px]");
      }
      if (btn?.classList.contains("left-0")) {
        btn.classList.remove("left-0");
        btn.classList.add("left-[19px]");
      }
      if (btn?.classList.contains("right-0")) {
        btn.classList.remove("right-0");
        btn.classList.add("right-[19px]");
      }
    }

    if (inputRef.current?.input) {
      const input = inputRef.current.input;

      input.addEventListener("focus", focus);
      input.addEventListener("blur", blur);

      return () => {
        input.removeEventListener("focus", focus);
        input.removeEventListener("blur", blur);
      };
    }
  }, []);

  async function onSubmit(payload: ILoginPhoneNumber) {
    createLog("payload", payload);
  }

  return (
    <div className="w-full h-full sizeScreen">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <CustomInputReactHook
          ref={inputRef}
          id="phoneNumber"
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
          ref={submitBtn}
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
