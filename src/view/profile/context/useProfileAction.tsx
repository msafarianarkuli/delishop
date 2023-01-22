import {useContext} from "react";
import {ProfileContextAction} from "view/profile/context/ProfileProvider";

function useProfileAction() {
  return useContext(ProfileContextAction);
}

export default useProfileAction;
