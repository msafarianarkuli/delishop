import {Map} from "components";
import styles from "view/addressCreate/addressCreate.module.scss";
import useMapPin from "hooks/useMapPin";
import {useFormContext, useWatch} from "react-hook-form";
import {useMemo} from "react";
import AddressCreateAddLocation from "view/addressCreate/component/AddressCreateAddLocation";

function AddressCreateMap() {
  const {control} = useFormContext();
  const pin = useMapPin();
  const location = useWatch({
    control,
    name: "location",
  });

  const point = useMemo(() => {
    if (location?.lat && location?.lng) {
      return [{lat: location.lat, lng: location.lng}];
    }
    return [];
  }, [location?.lat, location?.lng]);

  return (
    <div className={styles.address_create_map_container}>
      <Map
        className="w-full h-[100px] z-0 rounded-[10px] border border-borderColor"
        zoom={17}
        points={[point]}
        pinIcons={pin}
        zoomControl={false}
      />
      <AddressCreateAddLocation />
    </div>
  );
}

export default AddressCreateMap;
