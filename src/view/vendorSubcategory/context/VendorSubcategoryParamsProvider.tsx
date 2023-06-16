import {createContext, ReactNode, useContext} from "react";
import {IVendorSubcategoryPage} from "pages/[vendor]/[id]/[category]/[subcategory]";

const initialState: IVendorSubcategoryPage = {
  categoryId: "",
  subcategoryId: "",
  vendor: "",
  vendorId: "",
};

const VendorSubcategoryParamsContext = createContext<IVendorSubcategoryPage>(initialState);

interface IVendorSubcategoryParamsProvider extends IVendorSubcategoryPage {
  children: ReactNode;
}

function VendorSubcategoryParamsProvider(props: IVendorSubcategoryParamsProvider) {
  const {children, ...other} = props;
  return <VendorSubcategoryParamsContext.Provider value={other}>{children}</VendorSubcategoryParamsContext.Provider>;
}

export default VendorSubcategoryParamsProvider;

export function useVendorSubcategoryParams() {
  return useContext(VendorSubcategoryParamsContext);
}
