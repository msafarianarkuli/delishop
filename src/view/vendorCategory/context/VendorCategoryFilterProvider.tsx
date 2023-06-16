import {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";
import {IVendorCategoryFilterForm} from "view/vendorCategory/component/vendorCategoryFilter/VendorCategoryFilterBody";

const OPEN_MODAL = "open";
const LOADING = "loading";
const FORM_DATA = "form_data";

interface IAction {
  type: string;
  payload?: any;
}

interface IVendorCategoryFilter {
  isOpen: boolean;
  isLoading: boolean;
  formData: IVendorCategoryFilterForm;
}

const initialState: IVendorCategoryFilter = {
  isLoading: false,
  isOpen: false,
  formData: {
    hasCoin: false,
    category: [],
    type: [],
    brand: [],
    price: [0, 100],
  },
};

const VendorCategoryFilterContext = createContext<IVendorCategoryFilter>(initialState);
const VendorCategoryFilterAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: IVendorCategoryFilter, action: IAction) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
}

function VendorCategoryFilterProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <VendorCategoryFilterContext.Provider value={state}>
      <VendorCategoryFilterAction.Provider value={dispatch}>{children}</VendorCategoryFilterAction.Provider>
    </VendorCategoryFilterContext.Provider>
  );
}

export default VendorCategoryFilterProvider;

export const setVendorCategoryFilterOpen = (payload: boolean) => ({type: OPEN_MODAL, payload});
export const setVendorCategoryFilterLoading = (payload: boolean) => ({type: LOADING, payload});
export const setVendorCategoryFilterFormData = (payload: IVendorCategoryFilterForm) => ({
  type: FORM_DATA,
  payload,
});

export function useVendorCategoryFilter() {
  return useContext(VendorCategoryFilterContext);
}

export function useVendorCategoryFilterAction() {
  return useContext(VendorCategoryFilterAction);
}
