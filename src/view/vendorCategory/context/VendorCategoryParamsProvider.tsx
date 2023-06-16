import {createContext, ReactNode, useContext} from "react";
import {IVendorCategoryPage} from "pages/[vendor]/[id]/[category]";

const initialState: IVendorCategoryPage = {
  categoryId: "",
  vendor: "",
  vendorId: "",
};

const VendorCategoryParamsContext = createContext<IVendorCategoryPage>(initialState);

interface IVendorCategoryParamsProvider extends IVendorCategoryPage {
  children: ReactNode;
}
function VendorCategoryParamsProvider(props: IVendorCategoryParamsProvider) {
  const {children, ...other} = props;
  return <VendorCategoryParamsContext.Provider value={other}>{children}</VendorCategoryParamsContext.Provider>;
}

export default VendorCategoryParamsProvider;

export function useVendorCategoryParams() {
  return useContext(VendorCategoryParamsContext);
}
