import React, {createContext, Dispatch, useContext, useReducer} from "react";
import {IGetUserAddressesListAddressesItem} from "types/interfaceUserAddress";

const SET_DESCRIPTION = "description";
const SET_DELIVERY_TIME = "deliveryTIme";
const SET_STEP = "step";
const SET_DELIVERY_ADDRESS = "deliveryAddress";

export interface IOrderCompleteDeliverTime {
  isTemp?: boolean;
  from: number;
  to: number;
}

interface IOrderComplete {
  description?: string;
  deliveryTime?: IOrderCompleteDeliverTime;
  deliveryAddress?: IGetUserAddressesListAddressesItem;
  step: number;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IOrderComplete = {
  step: 1,
};

const OrderCompleteContext = createContext<IOrderComplete>(initialState);
const OrderCompleteAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: IOrderComplete, action: IAction) {
  switch (action.type) {
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case SET_DELIVERY_TIME:
      return {
        ...state,
        deliveryTime: action.payload,
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case SET_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: action.payload,
      };
    default:
      return state;
  }
}

function OrderCompleteProvider({children}: {children: JSX.Element}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OrderCompleteContext.Provider value={state}>
      <OrderCompleteAction.Provider value={dispatch}>{children}</OrderCompleteAction.Provider>
    </OrderCompleteContext.Provider>
  );
}

export default OrderCompleteProvider;

export const setOrderCompleteDescription = (payload: string) => ({type: SET_DESCRIPTION, payload});
export const setOrderCompleteDeliveryTime = (payload: IOrderCompleteDeliverTime) => ({
  type: SET_DELIVERY_TIME,
  payload,
});
export const setOrderCompleteStep = (payload: number) => ({type: SET_STEP, payload});
export const setOrderCompleteDeliveryAddress = (payload: IGetUserAddressesListAddressesItem) => ({
  type: SET_DELIVERY_ADDRESS,
  payload,
});

export function useOrderComplete() {
  return useContext(OrderCompleteContext);
}

export function useOrderCompleteAction() {
  return useContext(OrderCompleteAction);
}
