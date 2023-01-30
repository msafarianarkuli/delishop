import {useContext} from "react";
import {AuthContext} from "view/auth/context/AuthProvider";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
