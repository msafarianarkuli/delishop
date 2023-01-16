import {useContext} from "react";
import {LoginContextAction} from "template/auth/login/context/LoginProvider";

function useLoginAction() {
  return useContext(LoginContextAction);
}

export default useLoginAction;
