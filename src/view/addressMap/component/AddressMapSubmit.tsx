import {Button} from "antd";
import classNames from "classnames";
import {TUseTypeColor} from "hooks/useTypeColor";
import useAddressMap from "view/addressMap/context/useAddressMap";
import {useDispatch} from "react-redux";
import {AppDispatch} from "redux/store";
import {setAddressMap} from "redux/addressMap/addressMapReducer";

interface IAddressMapSubmit {
  type: TUseTypeColor;
}

function AddressMapSubmit({type}: IAddressMapSubmit) {
  const {addressLoading, addressData, location} = useAddressMap();
  const dispatch = useDispatch<AppDispatch>();

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
      }}
    >
      تایید آدرس
    </Button>
  );
}

export default AddressMapSubmit;
