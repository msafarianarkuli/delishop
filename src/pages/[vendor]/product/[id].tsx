import VendorProduct from "view/vendorProduct";
import {vendorsAddress} from "utils/Const";
import {GetStaticPaths, GetStaticProps} from "next";
import VendorProductParamsProvider from "view/vendorProduct/context/VendorProductParamsProvider";

export interface IVendorProductPage {
  isRestaurant: boolean;
  isSupermarket: boolean;
  vendor: string;
  id: string;
}

function VendorProductPage(props: IVendorProductPage) {
  return (
    <VendorProductParamsProvider {...props}>
      <VendorProduct />
    </VendorProductParamsProvider>
  );
}

export default VendorProductPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const vendor = params?.vendor;
  const id = params?.id;
  const hasVendor = vendorsAddress.some((item) => item.name === vendor);
  if (hasVendor && vendor && id && !Array.isArray(id) && !Array.isArray(vendor)) {
    const vendorData = vendorsAddress.find((item) => item.name === vendor);
    return {
      props: {
        vendor,
        id,
        isRestaurant: !!vendorData?.isRestaurant,
        isSupermarket: !!vendorData?.isSupermarket,
      },
    };
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};
