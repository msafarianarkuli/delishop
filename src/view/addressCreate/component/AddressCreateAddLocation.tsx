import React, {useMemo} from "react";
import {IconRoundedLeft} from "assets/icons";
import {useFormContext, useWatch} from "react-hook-form";
import {useRouter} from "next/router";
import usePathnameQuery from "hooks/usePathnameQuery";

function AddressCreateAddLocation() {
  const router = useRouter();
  const {querySearch} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);
  const {control} = useFormContext();
  const address = useWatch({
    control,
    name: "address",
  });
  return (
    <button
      className="flex items-center text-right w-full px-[10px] py-[20px]"
      type="button"
      onClick={() => {
        query.set("callbackUrl", encodeURI(router.asPath));
        let url = "/address/map";
        url += query.toString() ? `?${query.toString()}` : "";
        router.push(url);
      }}
    >
      <div className="w-[calc(100%-18px)] truncate text-textColorLight pl-2">
        <span className="ml-1">محدوده:</span>
        <span>{address}</span>
      </div>
      <div className="flex gap-1 text-primary font-bold">
        <span>ویرایش</span>
        <IconRoundedLeft className="w-4" />
      </div>
    </button>
  );
}

export default AddressCreateAddLocation;
