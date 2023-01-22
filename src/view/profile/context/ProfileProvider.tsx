import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

interface IProfileProvider {
  children: ReactNode;
}

export const ProfileContext = createContext<boolean>(false);
export const ProfileContextAction = createContext<Dispatch<SetStateAction<boolean>>>(() => null);

function ProfileProvider({children}: IProfileProvider) {
  const [state, setState] = useState(false);
  return (
    <ProfileContext.Provider value={state}>
      <ProfileContextAction.Provider value={setState}>{children}</ProfileContextAction.Provider>
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
