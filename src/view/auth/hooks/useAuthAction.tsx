import {useContext} from "react";
import {AuthContextAction} from "view/auth/context/AuthProvider";

function useAuthAction() {
  return useContext(AuthContextAction);
}

export default useAuthAction;
