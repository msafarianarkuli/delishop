import React, {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";
import {Button} from "antd";
import {sendCode} from "api";
import {createLog} from "utils/utils";
import useAuth from "view/auth/hooks/useAuth";

interface ILoginReSendBtn {
  isSubmitting: boolean;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const tmpTimer = 120;

function LoginReSendBtn({isLoading, isSubmitting, setIsLoading}: ILoginReSendBtn) {
  const {phone, isCode} = useAuth();
  const [time, setTime] = useState(tmpTimer);

  useEffect(() => {
    if (time > 0 && isCode) {
      const timer = setTimeout(() => setTime((prevState) => prevState - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isCode, time]);

  useEffect(() => {
    if (!isCode) setTime(tmpTimer);
  }, [isCode]);

  const reSendCode = useCallback(() => {
    setIsLoading(true);
    sendCode({phone})
      .then((res) => {
        createLog("res CodeConfirm", res.data);
        setTime(tmpTimer);
      })
      .catch((err) => {
        createLog("error CodeConfirm", err);
      })
      .finally(() => setIsLoading(false));
  }, [phone, setIsLoading]);

  return (
    <>
      <Button
        loading={isSubmitting || isLoading}
        className="secondary-btn w-full text-[15px]"
        disabled={time > 0}
        onClick={reSendCode}
      >
        ارسال مجدد ({time})
      </Button>
    </>
  );
}

export default LoginReSendBtn;
