import {useState} from "react";
import {Button} from "antd";
import {IconCurrentLocation} from "assets/icons";
import {createLog} from "utils/utils";
import {setAddressMapContextCurrentLocation} from "view/addressMap/context/AddressMapProvider";
import useAddressMapAction from "view/addressMap/context/useAddressMapAction";

function AddressMapCurrentLocation() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAddressMapAction();

  function getLocationSuccess(position: GeolocationPosition) {
    createLog("position", position);
    setLoading(false);
    dispatch(
      setAddressMapContextCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  }

  function getLocationError(positionError: GeolocationPositionError) {
    setLoading(false);
    createLog("positionError", positionError);
  }

  return (
    <Button
      icon={<IconCurrentLocation className="w-5 h-5" />}
      loading={loading}
      className="pointer-events-auto w-[40px] h-[40px] flex items-center justify-center border-0 bg-white p-0 rounded-full mb-8"
      onClick={() => {
        if ("geolocation" in navigator) {
          setLoading(true);
          const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 2000,
          };
          navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError, options);
        } else {
          /* geolocation IS NOT available */
        }
      }}
    />
  );
}

export default AddressMapCurrentLocation;
