import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {CustomInputReactHook} from "components";
import {Button} from "antd";
import useLoginAction from "template/auth/login/context/useLoginAction";
import {loginSetPhone} from "template/auth/login/context/LoginProvider";
import useLogin from "template/auth/login/context/useLogin";
import LoginReSendBtn from "template/auth/login/components/LoginReSendBtn";

interface ICodeConfirm {
  code: string;
}

function LoginCodeConfirm() {
  const dispatch = useLoginAction();
  const {phone} = useLogin();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: {isSubmitting},
  } = useForm<ICodeConfirm>({
    mode: "all",
  });

  function onSubmit(payload: ICodeConfirm) {
    console.log("payload", payload);
  }

  return (
    <div>
      <div className="text-center mt-5">
        کد ارسالی به شماره <span className="text-primary">{phone}</span> را وارد کنید
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <CustomInputReactHook
            id="code"
            control={control}
            classNameContainer="mt-12"
            className="bg-transparent rounded-none border-0 border-b focus:shadow-none text-center"
            placeholder="کد احراز هویت را وارد کنید"
            inputMode="decimal"
            numerical
            rules={{
              validate: (value) => {
                if (!value) return "کد احراز هویت را وارد کنید";
                return true;
              },
            }}
          />
          <div className="flex items-center justify-center mt-8">
            <Button loading={isSubmitting || isLoading} onClick={() => dispatch(loginSetPhone())} type="ghost">
              تغییر شماره
            </Button>
          </div>
          <div className="flex items-center mt-16">
            <Button
              htmlType="submit"
              type="primary"
              className="submit-btn modal-submit-btn w-full ml-3"
              loading={isSubmitting || isLoading}
            >
              ثبت
            </Button>
            <LoginReSendBtn isSubmitting={isSubmitting} isLoading={isLoading} setIsLoading={setIsLoading} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginCodeConfirm;
