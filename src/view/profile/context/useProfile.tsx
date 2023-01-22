import {useContext} from "react";
import {ProfileContext} from "view/profile/context/ProfileProvider";

function useProfile() {
  return useContext(ProfileContext);
}

export default useProfile;
