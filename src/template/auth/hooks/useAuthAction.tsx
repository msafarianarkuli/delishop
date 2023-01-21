import {useContext} from "react";
import {AuthContextAction} from "template/auth/context/AuthProvider";

function useAuthAction() {
  return useContext(AuthContextAction);
}

export default useAuthAction;
