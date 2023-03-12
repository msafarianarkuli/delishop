import React, {createContext, Dispatch, useContext, useReducer} from "react";
import {onlyNumberValue} from "utils/utils";

interface IAction {
  type: string;
  payload?: any;
}

const ProfileWalletChargeWalletContext = createContext<string>("");
const ProfileWalletChargeWalletAction = createContext<Dispatch<IAction>>(() => null);

const INCREASE = "increase";
const DECREASE = "decrease";
const SET_NUMBER = "setNumber";

function increase(value: string): string {
  let tmp = Number.parseInt(onlyNumberValue(value || "0"));
  tmp += 10000;
  return tmp.toLocaleString("en-US");
}

function decrease(value: string): string {
  let tmp = Number.parseInt(onlyNumberValue(value || "0"));
  if (tmp > 10000) {
    tmp -= 10000;
    return tmp.toLocaleString("en-US");
  } else {
    return "";
  }
}

function reducer(state: string, action: IAction) {
  switch (action.type) {
    case SET_NUMBER:
      return action.payload;
    case INCREASE:
      return increase(state);
    case DECREASE:
      return decrease(state);
    default:
      return state;
  }
}

function ProfileWalletChargeWalletProvider({children}: {children: JSX.Element[]}) {
  const [state, dispatch] = useReducer(reducer, "");
  return (
    <ProfileWalletChargeWalletContext.Provider value={state}>
      <ProfileWalletChargeWalletAction.Provider value={dispatch}>{children}</ProfileWalletChargeWalletAction.Provider>
    </ProfileWalletChargeWalletContext.Provider>
  );
}

export const setProfileWalletChargeWalletNumber = (payload: string) => ({type: SET_NUMBER, payload});
export const setProfileWalletChargeWalletIncrease = () => ({type: INCREASE});
export const setProfileWalletChargeWalletDecrease = () => ({type: DECREASE});

export default ProfileWalletChargeWalletProvider;

export function useProfileWalletChargeWallet() {
  return useContext(ProfileWalletChargeWalletContext);
}

export function useProfileWalletChargeWalletAction() {
  return useContext(ProfileWalletChargeWalletAction);
}
