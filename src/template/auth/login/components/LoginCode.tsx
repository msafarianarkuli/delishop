import React from "react";
import {CustomModal} from "components";
import CodeConfirm from "template/auth/login/components/CodeConfirm";

function LoginCode() {
  return (
    <CustomModal
      open
      header={<div className="w-full text-[15px] text-center font-medium">تایید شماره تلفن</div>}
      body={<CodeConfirm />}
    />
  );
}

export default LoginCode;
