import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {CustomInputReactHook} from "components";
import {Button} from "antd";
import useAuthAction from "view/auth/hooks/useAuthAction";
import {authSetPhone} from "view/auth/context/AuthProvider";
import useAuth from "view/auth/hooks/useAuth";
import LoginReSendBtn from "view/auth/login/components/LoginReSendBtn";
import {createLog} from "utils/utils";
import {signIn} from "next-auth/react";
import {SignInResponse} from "next-auth/react/types";

interface ICodeConfirm {
  code: string;
}

function isSignInResponse(obj: any): obj is SignInResponse {
  return (
    obj.hasOwnProperty("error") && obj.hasOwnProperty("status") && obj.hasOwnProperty("ok") && obj.hasOwnProperty("url")
  );
}

function LoginCodeConfirm() {
  const dispatch = useAuthAction();
  const {phone, isCode} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: {isSubmitting},
    reset,
    setError,
  } = useForm<ICodeConfirm>({
    mode: "all",
  });

  useEffect(() => {
    if (!isCode) reset();
  }, [isCode, reset]);

  async function onSubmit(payload: ICodeConfirm) {
    console.log("payload", payload);
    try {
      const res = await signIn("credentials", {
        phone,
        code: payload.code,
        redirect: false,
        // callbackUrl: router.query.callbackUrl as string || "/restaurant"
      });
      createLog("res LoginCodeConfirm", res);
      if (isSignInResponse(res)) {
        setError("code", {message: res.error});
      } else {
        // await router.replace((router.query.callbackUrl as string) || "/restaurant");
      }
    } catch (e: unknown) {
      createLog("err LoginCodeConfirm", e);
    }
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
            <Button loading={isSubmitting || isLoading} onClick={() => dispatch(authSetPhone())} type="ghost">
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
