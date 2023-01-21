import {useContext} from "react";
import {AuthContext} from "template/auth/context/AuthProvider";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
