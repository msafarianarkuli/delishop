import VendorOrderActive from "view/vendorOrderActive";
import {EVendorsId, vendorsAddress} from "utils/Const";
import VendorOrderActiveParamsProvider from "view/vendorOrderActive/context/VendorOrderActiveParamsProvider";
import {GetStaticPaths, GetStaticProps} from "next";

export interface IVendorOrderActivePage {
  vendor: string;
  id: EVendorsId;
}

function VendorOrderActivePage(props: IVendorOrderActivePage) {
  return (
    <VendorOrderActiveParamsProvider {...props}>
      <VendorOrderActive />
    </VendorOrderActiveParamsProvider>
  );
}

export default VendorOrderActivePage;

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
