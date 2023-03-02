import {Button} from "antd";
import classNames from "classnames";
import {TUseTypeColor} from "hooks/useTypeColor";
import useAddressMap from "view/addressMap/context/useAddressMap";
import {useDispatch} from "react-redux";
import {AppDispatch} from "redux/store";
import {setAddressMap} from "redux/addressMap/addressMapReducer";
import {useRouter} from "next/router";
import usePathnameQuery from "hooks/usePathnameQuery";
import {useMemo} from "react";

interface IAddressMapSubmit {
  type: TUseTypeColor;
}

function AddressMapSubmit({type}: IAddressMapSubmit) {
  const {addressLoading, addressData, location} = useAddressMap();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const {querySearch} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);

  const container = classNames({
    "pointer-events-auto w-full": true,
    "submit-btn": type === "default",
    "submit-btn-supermarket": type === "supermarket",
  });

  return (
    <Button
      loading={addressLoading}
      type="primary"
      className={container}
      onClick={() => {
        const callbackUrl = query.get("callbackUrl");
        if (location && addressData) {
          dispatch(
            setAddressMap({
              location,
              locationData: addressData,
              isEdit: callbackUrl?.search("/create/") !== -1,
            })
          );
        }
        if (callbackUrl) {
          router.replace(decodeURI(callbackUrl));
        } else {
          router.replace("/");
        }
      }}
    >
      تایید آدرس
    </Button>
  );
}

export default AddressMapSubmit;
