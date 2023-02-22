import {createLog} from "utils/utils";
import {Map} from "components";
import {useEffect, useState} from "react";
import {IMapPoint} from "components/map/Map";
import useAddressMapAction from "view/addressMap/context/useAddressMapAction";
import {setAddressMapAddress, setAddressMapAddressLoading} from "view/addressMap/context/AddressMapProvider";
import {useMap} from "react-leaflet";
import useAddressMap from "view/addressMap/context/useAddressMap";
import useMapPin from "hooks/useMapPin";
import {getAddressFromMap} from "api";

function AddressMapLocation() {
  const [location, setLocation] = useState<IMapPoint[]>([]);
  const dispatch = useAddressMapAction();
  const pin = useMapPin();

  useEffect(() => {
    if (location?.length) {
      const loc = location[0];
      createLog("loc", loc);
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
      pinIcons={pin}
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
