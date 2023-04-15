import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {IGetOrderDetailData} from "types/interfaceOrderDetail";
import getOrderDetail from "api/getOrderDetail";
import {useSession} from "next-auth/react";
import {useMemo} from "react";

interface IUseOrderDetailResult {
  queryKey: string;
  staleTime?: number;
}

function useOrderDetailResult(props: IUseOrderDetailResult) {
  const {queryKey, staleTime} = props;
  const router = useRouter();
  const {status, data} = useSession();

  const useQueryEnabled = useMemo(() => router.isReady && status === "authenticated", [router.isReady, status]);

  return useQuery<IGetOrderDetailData>(
    [queryKey, router.query.id],
    () => getOrderDetail({id: router.query.id as string, token: data?.user.token || ""}),
    {staleTime, enabled: useQueryEnabled}
  );
}

export default useOrderDetailResult;
