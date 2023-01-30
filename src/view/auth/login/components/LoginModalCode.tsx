import React from "react";
import {CustomModal} from "components";
import LoginCodeConfirm from "view/auth/login/components/LoginCodeConfirm";

interface ILoginCode {
  open: boolean;
}

function LoginModalCode({open}: ILoginCode) {
  return (
    <CustomModal
      open={open}
      header={<div className="w-full text-[15px] text-center font-medium">تایید شماره تلفن</div>}
      body={<LoginCodeConfirm />}
    />
  );
}

export default LoginModalCode;
