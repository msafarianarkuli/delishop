import {EVendorsId, vendorsAddress} from "utils/Const";
import VendorOrderPrevious from "view/vendorOrderPrevious";
import VendorOrderPreviousParamsProvider from "view/vendorOrderPrevious/context/VendorOrderPreviousParamsProvider";
import {GetStaticPaths, GetStaticProps} from "next";

export interface IVendorOrderPreviousPage {
  vendor: string;
  id: EVendorsId;
}

function VendorOrderPreviousPage(props: IVendorOrderPreviousPage) {
  return (
    <VendorOrderPreviousParamsProvider {...props}>
      <VendorOrderPrevious />
    </VendorOrderPreviousParamsProvider>
  );
}

export default VendorOrderPreviousPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const vendor = params?.vendor;
  const vendorId = vendorsAddress.find((item) => item.name === vendor);
  return {
    props: {
      vendor,
      id: vendorId?.id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = vendorsAddress.map((item) => ({params: {vendor: item.name}}));
  return {
    paths,
    fallback: false,
  };
};
