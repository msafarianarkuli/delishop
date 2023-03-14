import React, {useMemo} from "react";
import {AppHeader, AppHeaderBackBtn, AppHeaderDelete} from "components";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {clearCartSupermarket, selectCartSupermarketCount} from "redux/cartSupermraket/cartSupermarketReducer";

function SupermarketCartHeader() {
  const router = useRouter();
  const dispatch = useDispatch();
  const totalCount = useSelector(selectCartSupermarketCount);

  const body = useMemo(() => {
    let text = "سبد خرید";
    if (totalCount) {
      text += ` (${totalCount})`;
    }
    return text;
  }, [totalCount]);

  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader
        left={
          <AppHeaderDelete
            onClick={() => {
              dispatch(clearCartSupermarket());
            }}
          />
        }
        body={body}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default SupermarketCartHeader;
