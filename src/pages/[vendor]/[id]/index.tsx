import {GetStaticPaths, GetStaticProps} from "next";
import {ReactQueryKey, vendorsAddress} from "utils/Const";
import VendorDetail from "view/vendorDetail";
import VendorDetailParamsProvider from "view/vendorDetail/context/VendorDetailParamsProvider";
import {dehydrate, QueryClient} from "react-query";
import getVendorDetail from "api/getVendorDetail";
import getLogisticCurrentPrice from "api/getLogisticCurrentPrice";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import getSupermarketDetail from "api/getSupermarketDetail";
import LogisticPriceProvider from "context/LogisticPriceProvider";

export interface IVendorDetailPage {
  isRestaurant: boolean;
  isSupermarket: boolean;
  vendor: string;
  id: string;
}

function VendorDetailPage(props: IVendorDetailPage) {
  return (
    <VendorDetailParamsProvider {...props}>
      <LogisticPriceProvider>
        <VendorDetail />
      </LogisticPriceProvider>
    </VendorDetailParamsProvider>
  );
}

export default VendorDetailPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryClient = new QueryClient();
  const vendor = params?.vendor;
  const id = params?.id;
  const hasVendor = vendorsAddress.some((item) => item.name === vendor);
  if (vendor && id && !Array.isArray(vendor) && !Array.isArray(id) && hasVendor) {
    const vendorData = vendorsAddress.find((item) => item.name === vendor)!;
    let queryKey: string[] = [];
    await queryClient.prefetchQuery({
      queryKey: [ReactQueryKey.LOGISTIC_CURRENT_PRICE],
      queryFn: () => getLogisticCurrentPrice(true),
    });
    console.log("vendorData", vendorData);
    if (vendorData.isRestaurant) {
      // restaurant detail
      queryKey = [ReactQueryKey.VENDOR_DETAIL_RESTAURANT, id];
      await queryClient.prefetchQuery({
        queryKey,
        queryFn: () => getVendorDetail({isServer: true, id: id}),
      });
    } else if (vendorData.isSupermarket) {
      // supermarket detail
      queryKey = [ReactQueryKey.VENDOR_DETAIL_SUPERMARKET, id];
      await queryClient.prefetchQuery({
        queryKey,
        queryFn: () => getSupermarketDetail({isServer: true, id}),
      });
    }
    const queryState = queryClient.getQueryState<IGetVendorDetailData, {status: number}>(queryKey);
    console.log("queryState", queryState);
    const status = queryState?.error?.status;
    if (status === 404) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        isRestaurant: !!vendorData.isRestaurant,
        isSupermarket: !!vendorData.isSupermarket,
        vendor,
        id,
      },
      revalidate: 3 * 60,
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
