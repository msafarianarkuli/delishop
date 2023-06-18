import {EVendorsId} from "utils/Const";
import {createContext, ReactNode, useContext} from "react";
import {IVendorOrderPreviousPage} from "pages/[vendor]/order/previous";

const initialState: IVendorOrderPreviousPage = {
  vendor: "",
  id: EVendorsId.restaurant,
};

const VendorOrderPreviousParamsContext = createContext<IVendorOrderPreviousPage>(initialState);

interface IVendorOrderPreviousParams extends IVendorOrderPreviousPage {
  children: ReactNode;
}

function VendorOrderPreviousParamsProvider(props: IVendorOrderPreviousParams) {
  const {children, ...other} = props;
  return (
    <VendorOrderPreviousParamsContext.Provider value={other}>{children}</VendorOrderPreviousParamsContext.Provider>
  );
}

export default VendorOrderPreviousParamsProvider;

export function useVendorOrderPreviousParams() {
  return useContext(VendorOrderPreviousParamsContext);
}
