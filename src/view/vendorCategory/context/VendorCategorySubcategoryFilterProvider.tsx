import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

const VendorCategorySubcategoryFilterContext = createContext<number>(0);
const VendorCategorySubcategoryFilterAction = createContext<Dispatch<SetStateAction<number>>>(() => null);

function VendorCategorySubcategoryFilterProvider({children}: {children: ReactNode}) {
  const [state, setState] = useState(0);
  return (
    <VendorCategorySubcategoryFilterContext.Provider value={state}>
      <VendorCategorySubcategoryFilterAction.Provider value={setState}>
        {children}
      </VendorCategorySubcategoryFilterAction.Provider>
    </VendorCategorySubcategoryFilterContext.Provider>
  );
}

export default VendorCategorySubcategoryFilterProvider;

export function useVendorCategorySubcategoryFilter() {
  return useContext(VendorCategorySubcategoryFilterContext);
}

export function useVendorCategorySubcategoryFilterAction() {
  return useContext(VendorCategorySubcategoryFilterAction);
}
