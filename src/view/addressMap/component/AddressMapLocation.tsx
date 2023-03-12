import {createLog} from "utils/utils";
import {Map} from "components";
import {useEffect, useState} from "react";
import {IMapPoint} from "components/map/Map";
import useAddressMapAction from "view/addressMap/context/useAddressMapAction";
import {
  setAddressMapContextAddress,
  setAddressMapContextAddressLoading,
  setAddressMapContextLocation,
} from "view/addressMap/context/AddressMapProvider";
import {useMap} from "react-leaflet";
import useAddressMap from "view/addressMap/context/useAddressMap";
import useMapPin from "hooks/useMapPin";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import getAddressFromMap from "api/getAddressFromMap";

function AddressMapLocation() {
  const [location, setLocation] = useState<IMapPoint[]>([]);
  const {location: selectedLocation, isStorageLoaded} = useSelector(selectAddressMap);
  const dispatch = useAddressMapAction();
  const pin = useMapPin();

  useEffect(() => {
    if (isStorageLoaded && selectedLocation?.lat && selectedLocation?.lng) {
      const tmpLocation = {lat: selectedLocation?.lat, lng: selectedLocation?.lng};
      dispatch(setAddressMapContextLocation(tmpLocation));
      setLocation([tmpLocation]);
    }
  }, []);

  useEffect(() => {
    if (location?.length) {
      const loc = location[0];
      dispatch(setAddressMapContextAddressLoading(true));
      getAddressFromMap({
        lat: loc.lat,
        lng: loc.lng,
      })
        .then((res) => {
          // createLog("res", res.data);
          dispatch(setAddressMapContextAddress(res.data));
        })
        .catch((err) => {
          createLog("err", err);
          dispatch(setAddressMapContextAddress());
        })
        .finally(() => dispatch(setAddressMapContextAddressLoading(false)));
    }
  }, [dispatch, location]);

  return (
    <Map
      className="w-full h-screen"
      points={[location]}
      pinIcons={pin}
      onClick={(event) => {
        const location = {
          lat: event.latlng.lat,
          lng: event.latlng.lng,
        };
        dispatch(setAddressMapContextLocation(location));
        setLocation([location]);
      }}
    >
      <EditLocation />
      <CurrentLocation />
    </Map>
  );
}

function EditLocation() {
  const {location, isStorageLoaded} = useSelector(selectAddressMap);
  const map = useMap();

  useEffect(() => {
    if (location?.lat && location?.lng && isStorageLoaded) {
      map.flyTo({lat: location.lat, lng: location.lng}, map.getZoom());
    }
  }, [map]);

  return null;
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
