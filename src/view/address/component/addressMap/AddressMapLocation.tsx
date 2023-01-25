import {createLog} from "utils/utils";
import {Map} from "components";
import {useEffect, useState} from "react";
import {IMapPoint} from "components/map/Map";
import getAddressFromMap from "api/getAddressFromMap";
import useAddressMapAction from "view/address/component/addressMap/context/useAddressMapAction";
import {
  setAddressMapAddress,
  setAddressMapAddressLoading,
} from "view/address/component/addressMap/context/AddressMapProvider";
import {useMap} from "react-leaflet";
import useAddressMap from "view/address/component/addressMap/context/useAddressMap";

function AddressMapLocation() {
  const [location, setLocation] = useState<IMapPoint[]>([]);
  const dispatch = useAddressMapAction();

  useEffect(() => {
    if (location?.length) {
      const loc = location[0];
      createLog("loc", loc);
      // setAddressLoading(true);
      dispatch(setAddressMapAddressLoading(true));
      getAddressFromMap({
        lat: loc.lat,
        lng: loc.lng,
      })
        .then((res) => {
          createLog("res", res.data);
          dispatch(setAddressMapAddress(res.data.formatted_address || ""));
        })
        .catch((err) => {
          createLog("err", err);
          dispatch(setAddressMapAddress(""));
        })
        .finally(() => dispatch(setAddressMapAddressLoading(false)));
    }
  }, [dispatch, location]);

  return (
    <Map
      className="w-full h-screen"
      points={[location]}
      onClick={(event) => {
        createLog("AddressMap event", event);
        setLocation([
          {
            lat: event.latlng.lat,
            lng: event.latlng.lng,
            title: "لوکیشسن من",
          },
        ]);
      }}
    >
      <CurrentLocation />
    </Map>
  );
}

function CurrentLocation() {
  const {currentLocation} = useAddressMap();
  const map = useMap();

  useEffect(() => {
    if (currentLocation?.lat && currentLocation.lng) {
      map.flyTo({lat: currentLocation.lat, lng: currentLocation.lat}, map.getZoom());
    }
  }, [map, currentLocation]);

  return null;
}

export default AddressMapLocation;
