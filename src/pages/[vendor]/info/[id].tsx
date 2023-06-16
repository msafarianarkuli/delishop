import VendorInfo from "view/vendorInfo";
import VendorInfoParamsProvider from "view/vendorInfo/context/VendorInfoParamsProvider";
import {GetStaticPaths, GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import getVendorDetail from "api/getVendorDetail";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import {ReactQueryKey, vendorsAddress} from "utils/Const";
import getSupermarketDetail from "api/getSupermarketDetail";

export interface IVendorInfoPage {
  isRestaurant: boolean;
  isSupermarket: boolean;
  vendor: string;
  id: string;
}

function VendorInfoPage(props: IVendorInfoPage) {
  return (
    <VendorInfoParamsProvider {...props}>
      <VendorInfo />
    </VendorInfoParamsProvider>
  );
}

export default VendorInfoPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryClient = new QueryClient();
  const vendor = params?.vendor;
  const id = params?.id;
  const hasVendor = vendorsAddress.some((item) => item.name === vendor);
  if (hasVendor && vendor && id && !Array.isArray(vendor) && !Array.isArray(id)) {
    const vendorData = vendorsAddress.find((item) => item.name === vendor);
    let queryKey: string[] = [];
    if (vendorData?.isRestaurant) {
      queryKey = [ReactQueryKey.VENDOR_DETAIL_RESTAURANT, id];
      await queryClient.prefetchQuery({
        queryKey,
        queryFn: () => getVendorDetail({isServer: true, id}),
      });
    } else if (vendorData?.isSupermarket) {
      queryKey = [ReactQueryKey.VENDOR_DETAIL_SUPERMARKET, id];
      await queryClient.prefetchQuery({
        queryKey,
        queryFn: () => getSupermarketDetail({isServer: true, id}),
      });
    }
    const queryState = queryClient.getQueryState<IGetVendorDetailData, {status: number}>(queryKey);
    const status = queryState?.error?.status;
    if (status === 404) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        vendor,
        id,
        isRestaurant: !!vendorData?.isRestaurant,
        isSupermarket: !!vendorData?.isSupermarket,
      },
      revalidate: 60,
    };
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
