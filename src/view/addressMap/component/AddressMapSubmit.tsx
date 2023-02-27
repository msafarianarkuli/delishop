import {Button} from "antd";
import classNames from "classnames";
import {TUseTypeColor} from "hooks/useTypeColor";
import useAddressMap from "view/addressMap/context/useAddressMap";
import {useDispatch} from "react-redux";
import {AppDispatch} from "redux/store";
import {setAddressMap} from "redux/addressMap/addressMapReducer";
import {useRouter} from "next/router";

interface IAddressMapSubmit {
  type: TUseTypeColor;
}

function AddressMapSubmit({type}: IAddressMapSubmit) {
  const {addressLoading, addressData, location} = useAddressMap();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

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
        if (location && addressData) {
          dispatch(
            setAddressMap({
              location,
              locationData: addressData,
            })
          );
        }
        const callbackUrl = router.query.callbackUrl;
        if (callbackUrl && !Array.isArray(callbackUrl)) {
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
