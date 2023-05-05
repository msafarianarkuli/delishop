import {useMemo} from "react";
import {hasNextPage} from "utils/utils";
import {useInfiniteQuery} from "react-query";
import getOrdersList from "api/getOrdersList";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";

interface IUseVendorListResult {
  queryKey: string;
  categoryId?: number[];
  statusId: number[];
  staleTime?: number;
}

function useOrderListResult(props: IUseVendorListResult) {
  const {statusId, staleTime, queryKey, categoryId} = props;
  const router = useRouter();
  const {status, data} = useSession();

  const queries = useMemo(() => {
    const tmpParams: {[x: string]: any} = {};
    const query = new URLSearchParams(tmpParams);
    if (categoryId?.length) {
      categoryId.forEach((item) => {
        query.append("vendor_category_id[]", item.toString());
      });
    }
    if (statusId.length) {
      statusId.forEach((item) => {
        query.append("orderstatus[]", item.toString());
      });
    }
    return "?" + query.toString();
  }, [categoryId, statusId]);

  const useQueryEnabled = useMemo(() => router.isReady && status === "authenticated", [router.isReady, status]);

  return useInfiniteQuery(
    queryKey,
    ({pageParam}) => getOrdersList({pageParam, token: data?.user.token || "", query: queries}),
    {
      staleTime,
      enabled: useQueryEnabled,
      getNextPageParam: (lastPage, allPages) => {
        const total = lastPage.total;
        const page = allPages.length;
        if (hasNextPage({page, total})) {
          return page + 1;
        }
        return undefined;
      },
    }
  );
}

export default useOrderListResult;
