import {createContext, Dispatch, useReducer} from "react";

// actions
const SET_PHONE = "phone";
const SET_CODE = "code";
const SET_REGISTER = "register";

interface ILoginProvider {
  children: JSX.Element;
}

interface ILoginState {
  phone: string;
  isCode: boolean;
  isRegister: boolean;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: ILoginState = {
  phone: "",
  isCode: false,
  isRegister: false,
};

export const AuthContext = createContext<ILoginState>(initialState);
export const AuthContextAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: ILoginState, action: IAction): ILoginState {
  switch (action.type) {
    case SET_PHONE:
      return {
        ...state,
        isCode: false,
        isRegister: false,
      };
    case SET_CODE:
      return {
        isRegister: false,
        isCode: true,
        phone: action.payload,
      };
    case SET_REGISTER:
      return {
        ...state,
        isCode: false,
        isRegister: true,
      };
    default:
      return state;
  }
}

function AuthProvider({children}: ILoginProvider) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={state}>
      <AuthContextAction.Provider value={dispatch}>{children}</AuthContextAction.Provider>
    </AuthContext.Provider>
  );
}

export const authSetPhone = () => ({type: SET_PHONE});
export const authSetCode = (payload: string) => ({type: SET_CODE, payload});
export const authRegister = () => ({type: SET_REGISTER});

export default AuthProvider;
