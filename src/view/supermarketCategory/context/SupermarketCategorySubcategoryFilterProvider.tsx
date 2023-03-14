import React, {createContext, Dispatch, SetStateAction, useContext, useState} from "react";

const SupermarketCategorySubcategoryFilterContext = createContext<number>(0);
const SupermarketCategorySubcategoryFilterAction = createContext<Dispatch<SetStateAction<number>>>(() => null);

function SupermarketCategorySubcategoryFilterProvider({children}: {children: JSX.Element}) {
  const [state, setState] = useState(0);
  return (
    <SupermarketCategorySubcategoryFilterContext.Provider value={state}>
      <SupermarketCategorySubcategoryFilterAction.Provider value={setState}>
        {children}
      </SupermarketCategorySubcategoryFilterAction.Provider>
    </SupermarketCategorySubcategoryFilterContext.Provider>
  );
}

export default SupermarketCategorySubcategoryFilterProvider;

export function useSupermarketCategorySubcategoryFilter() {
  return useContext(SupermarketCategorySubcategoryFilterContext);
}

export function useSupermarketCategorySubcategoryFilterAction() {
  return useContext(SupermarketCategorySubcategoryFilterAction);
}
