import {EVendorsId, vendorsAddress} from "utils/Const";
import VendorCart from "view/vendorCart";
import {GetStaticPaths, GetStaticProps} from "next";
import VendorCartParamsProvider from "view/vendorCart/context/VendorCartParamsProvider";

export interface IVendorCartPage {
  vendor: string;
  id: EVendorsId;
}

function VendorCartPage(props: IVendorCartPage) {
  return (
    <VendorCartParamsProvider {...props}>
      <VendorCart />
    </VendorCartParamsProvider>
  );
}

export default VendorCartPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const vendor = params?.vendor;
  const vendorData = vendorsAddress.find((item) => item.name === vendor);
  return {
    props: {
      vendor,
      id: vendorData?.id,
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
