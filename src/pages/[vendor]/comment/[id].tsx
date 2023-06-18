import VendorComment from "view/vendorComment";
import {GetServerSideProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import {ReactQueryKey, vendorsAddress} from "utils/Const";
import {createPaginationParams} from "utils/utils";
import getVendorComments, {IGetVendorCommentsRes} from "api/getVendorComments";
import VendorCommentDataProvider from "view/vendorComment/context/VendorCommentDataProvider";
import VendorCommentParamsProvider from "view/vendorComment/context/VendorCommentParamsProvider";

export interface IVendorCommentPage {
  vendor: string;
  id: string;
}

function VendorCommentPage(props: IVendorCommentPage) {
  return (
    <VendorCommentParamsProvider {...props}>
      <VendorCommentDataProvider>
        <VendorComment />
      </VendorCommentDataProvider>
    </VendorCommentParamsProvider>
  );
}

export default VendorCommentPage;

export const getServerSideProps: GetServerSideProps = async ({params, query}) => {
  const queryClient = new QueryClient();
  const vendor = params?.vendor;
  const id = params?.id;
  const hasVendor = vendorsAddress.some((item) => item.name === vendor);
  if (hasVendor && vendor && id && !Array.isArray(vendor) && !Array.isArray(id)) {
    const tmpQuery = {...query};
    delete tmpQuery?.vendor;
    delete tmpQuery?.id;
    const queryParams = createPaginationParams(tmpQuery);
    const queryKey = [ReactQueryKey.VENDOR_COMMENT, id];
    await queryClient.prefetchQuery({
      queryKey,
      queryFn: () => getVendorComments({isServer: true, id, params: queryParams}),
    });
    const queryState = queryClient.getQueryState<IGetVendorCommentsRes, {status: number}>(queryKey);
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
      },
    };
  }
  return {
    notFound: true,
  };
};
