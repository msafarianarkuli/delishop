import React, {createContext, Dispatch, useContext, useReducer} from "react";
import {IGetUserAddressesListAddressesItem} from "types/interfaceUserAddress";

const SET_DESCRIPTION = "description";
const SET_DELIVERY_TIME = "deliveryTIme";
const SET_STEP = "step";
const SET_DELIVERY_ADDRESS = "deliveryAddress";
const SET_PAYMENT_TYPE = "paymentType";
const SET_ERROR = "error";
const SET_DISCOUNT = "discount";

export interface IOrderCompleteDeliverTime {
  isTemp?: boolean;
  from: string;
  to: string;
}

interface IOrderComplete {
  description?: string;
  deliveryTime?: IOrderCompleteDeliverTime;
  deliveryAddress?: IGetUserAddressesListAddressesItem;
  paymentType: number;
  step: number;
  error?: string;
  discountPrice?: number;
  discountCode?: string;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IOrderComplete = {
  step: 1,
  paymentType: 34,
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
        error: "",
      };
    case SET_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: action.payload,
        error: "",
      };
    case SET_PAYMENT_TYPE:
      return {
        ...state,
        paymentType: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_DISCOUNT:
      return {
        ...state,
        discountPrice: action.payload.discountPrice,
        discountCode: action.payload.discountCode,
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
export const setOrderCompleteDeliveryTime = (payload?: IOrderCompleteDeliverTime) => ({
  type: SET_DELIVERY_TIME,
  payload,
});
export const setOrderCompleteStep = (payload: number) => ({type: SET_STEP, payload});
export const setOrderCompleteDeliveryAddress = (payload: IGetUserAddressesListAddressesItem) => ({
  type: SET_DELIVERY_ADDRESS,
  payload,
});

export const setOrderCompletePaymentType = (payload: number) => ({
  type: SET_PAYMENT_TYPE,
  payload,
});

export const setOrderCompleteError = (payload: string) => ({
  type: SET_ERROR,
  payload,
});

export const setOrderCompleteDiscountPrice = (payload: {discountPrice: number; discountCode: string}) => ({
  type: SET_DISCOUNT,
  payload,
});

export function useOrderComplete() {
  return useContext(OrderCompleteContext);
}

export function useOrderCompleteAction() {
  return useContext(OrderCompleteAction);
}
