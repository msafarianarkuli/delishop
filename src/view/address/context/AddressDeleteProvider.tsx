import React, {createContext, Dispatch, useContext, useReducer} from "react";
import {IGetUserAddressesListAddressesItem} from "types/interfaceUserAddress";

const SET_DATA = "setDate";
const CLOSE_MODAL = "closeModal";

interface IAddressDelete {
  open: boolean;
  data?: IGetUserAddressesListAddressesItem | null;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IAddressDelete = {
  open: false,
};

const AddressDeleteContext = createContext<IAddressDelete>(initialState);
const AddressDeleteContextAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: IAddressDelete, action: IAction): IAddressDelete {
  switch (action.type) {
    case SET_DATA:
      return {
        open: true,
        data: action.payload,
      };
    case CLOSE_MODAL:
      return {
        open: false,
        data: null,
      };
    default:
      return state;
  }
}

function AddressDeleteProvider({children}: {children: JSX.Element[]}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AddressDeleteContext.Provider value={state}>
      <AddressDeleteContextAction.Provider value={dispatch}>{children}</AddressDeleteContextAction.Provider>
    </AddressDeleteContext.Provider>
  );
}

export const setAddressDeleteData = (payload: IGetUserAddressesListAddressesItem) => ({type: SET_DATA, payload});
export const setAddressDeleteClose = () => ({type: CLOSE_MODAL});

export default AddressDeleteProvider;

export function useAddressDelete() {
  return useContext(AddressDeleteContext);
}

export function useAddressDeleteAction() {
  return useContext(AddressDeleteContextAction);
}
