import React from "react";
import {useForm} from "react-hook-form";
import {CustomInputReactHook} from "components";
import {Button} from "antd";

interface ICodeConfirm {
  code: string;
}

function CodeConfirm() {
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
        کد ارسالی به شماره <span className="text-primary">09193777597</span> را وارد کنید
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button type="ghost">تغییر شماره</Button>
          </div>
          <div className="flex items-center mt-16">
            <Button
              htmlType="submit"
              type="primary"
              className="submit-btn modal-submit-btn w-full ml-3"
              loading={isSubmitting}
            >
              ثبت
            </Button>
            <Button className="secondary-btn w-full border-transparent text-[15px]">ارسال مجدد (58)</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CodeConfirm;
