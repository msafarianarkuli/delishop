import React, {createContext, useContext} from "react";

interface ISupermarketCategoryIdProvider extends ISupermarketCategoryIdContext {
  children: JSX.Element;
}

interface ISupermarketCategoryIdContext {
  categoryId: string;
  vendorId: string;
}

const initialState = {
  categoryId: "",
  vendorId: "",
};

const SupermarketCategoryIdContext = createContext<ISupermarketCategoryIdContext>(initialState);

function SupermarketCategoryIdProvider(props: ISupermarketCategoryIdProvider) {
  const {children, categoryId, vendorId} = props;
  return (
    <SupermarketCategoryIdContext.Provider value={{vendorId, categoryId}}>
      {children}
    </SupermarketCategoryIdContext.Provider>
  );
}

export default SupermarketCategoryIdProvider;

export function useSupermarketCategoryId() {
  return useContext(SupermarketCategoryIdContext);
}
