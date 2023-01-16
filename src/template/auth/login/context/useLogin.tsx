import {useContext} from "react";
import {LoginContext} from "template/auth/login/context/LoginProvider";

function useLogin() {
  return useContext(LoginContext);
}

export default useLogin;
