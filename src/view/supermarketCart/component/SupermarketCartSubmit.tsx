import React from "react";
import {SubmitBuyBtn} from "components";
import {IconDownload} from "assets/icons";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {
  selectCartSupermarketCart,
  selectCartSupermarketCount,
  selectCartSupermarketPrice,
} from "redux/cartSupermraket/cartSupermarketReducer";

function SupermarketCartSubmit() {
  const router = useRouter();
  const totalPrice = useSelector(selectCartSupermarketPrice);
  const totalCount = useSelector(selectCartSupermarketCount);
  const cart = useSelector(selectCartSupermarketCart);

  if (!totalPrice) return null;
  return (
    <SubmitBuyBtn
      className="bottom-[65px]"
      type="supermarket"
      onClick={() => router.push(`/ordercomplete/${cart.vendorId}?supermarket=1`)}
      right={<IconDownload className="w-5 h-5" />}
      body={
        <>
          <span>تکمیل خرید</span>(<span>{totalCount}</span>)
        </>
      }
      left={
        <>
          <span>{totalPrice.toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
    />
  );
}

export default SupermarketCartSubmit;
