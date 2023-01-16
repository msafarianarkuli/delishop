import {createContext, Dispatch, useReducer} from "react";

// actions
const SET_PHONE = "phone";
const SET_CODE = "code";

interface ILoginProvider {
  children: JSX.Element;
}

interface ILoginState {
  phone: string;
  isCode: boolean;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: ILoginState = {
  phone: "",
  isCode: false,
};

export const LoginContext = createContext<ILoginState>(initialState);
export const LoginContextAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: ILoginState, action: IAction): ILoginState {
  switch (action.type) {
    case SET_PHONE:
      return {
        ...state,
        isCode: false,
      };
    case SET_CODE:
      return {
        isCode: true,
        phone: action.payload,
      };
    default:
      return state;
  }
}

function LoginProvider({children}: ILoginProvider) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={state}>
      <LoginContextAction.Provider value={dispatch}>{children}</LoginContextAction.Provider>
    </LoginContext.Provider>
  );
}

export const loginSetPhone = () => ({type: SET_PHONE});
export const loginSetCode = (payload: string) => ({type: SET_CODE, payload});

export default LoginProvider;
