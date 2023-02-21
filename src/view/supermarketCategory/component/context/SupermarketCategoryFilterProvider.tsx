import {createContext, Dispatch, useReducer} from "react";
import {ISupermarketCategoryFilterForm} from "view/supermarketCategory/component/supermarketCategoryFilter/SupermarketCategoryFilterBody";

const OPEN_MODAL = "open";
const LOADING = "loading";
const FORM_DATA = "form_data";

interface IAction {
  type: string;
  payload?: any;
}

interface ISupermarketCategoryFilter {
  isOpen: boolean;
  isLoading: boolean;
  formData: ISupermarketCategoryFilterForm;
}

const initialState: ISupermarketCategoryFilter = {
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

export const SupermarketCategoryFilterContext = createContext<ISupermarketCategoryFilter>(initialState);
export const SupermarketCategoryFilterAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: ISupermarketCategoryFilter, action: IAction) {
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

function SupermarketCategoryFilterProvider({children}: {children: JSX.Element[]}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SupermarketCategoryFilterContext.Provider value={state}>
      <SupermarketCategoryFilterAction.Provider value={dispatch}>{children}</SupermarketCategoryFilterAction.Provider>
    </SupermarketCategoryFilterContext.Provider>
  );
}

export const setSupermarketCategoryFilterOpen = (payload: boolean) => ({type: OPEN_MODAL, payload});
export const setSupermarketCategoryFilterLoading = (payload: boolean) => ({type: LOADING, payload});
export const setSupermarketCategoryFilterFormData = (payload: ISupermarketCategoryFilterForm) => ({
  type: FORM_DATA,
  payload,
});

export default SupermarketCategoryFilterProvider;
