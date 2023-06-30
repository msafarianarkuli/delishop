import {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";
import {IGetVendorDetailMenusGroupsProductsExtras} from "types/interfaceVendorDetail";

interface IVendorDetailRestaurantExtra {
  data?: IGetVendorDetailMenusGroupsProductsExtras[];
  isOpen: boolean;
  id: number;
  price: number;
  title: string;
  point: number;
  image: string;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IVendorDetailRestaurantExtra = {
  data: [],
  isOpen: false,
  id: 0,
  price: 0,
  title: "",
  point: 0,
  image: "",
};

export const SET_DATA = "data";
export const CLOSE = "close";

const VendorDetailRestaurantExtraContext = createContext<IVendorDetailRestaurantExtra>(initialState);
const VendorDetailRestaurantExtraAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: IVendorDetailRestaurantExtra, action: IAction): IVendorDetailRestaurantExtra {
  switch (action.type) {
    case SET_DATA:
      return {
        isOpen: true,
        data: action.payload.data,
        id: action.payload.id,
        price: action.payload.price,
        title: action.payload.title,
        point: action.payload.point || 0,
        image: action.payload.image,
      };
    case CLOSE:
      return {
        isOpen: false,
        data: [],
        id: 0,
        price: 0,
        title: "",
        point: 0,
        image: "",
      };
    default:
      return state;
  }
}

function VendorDetailRestaurantExtraProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <VendorDetailRestaurantExtraContext.Provider value={state}>
      <VendorDetailRestaurantExtraAction.Provider value={dispatch}>
        {children}
      </VendorDetailRestaurantExtraAction.Provider>
    </VendorDetailRestaurantExtraContext.Provider>
  );
}

export default VendorDetailRestaurantExtraProvider;

export const setVendorDetailRestaurantExtraData = (payload: {
  data: IGetVendorDetailMenusGroupsProductsExtras[];
  id: number;
  price: number;
  title: string;
  point: number;
  image: string;
}) => ({
  type: SET_DATA,
  payload,
});

export const setVendorDetailRestaurantExtraClose = () => ({type: CLOSE});

export function useVendorDetailRestaurantExtra() {
  return useContext(VendorDetailRestaurantExtraContext);
}

export function useVendorDetailRestaurantExtraAction() {
  return useContext(VendorDetailRestaurantExtraAction);
}
