import {Map} from "components";
import styles from "view/addressCreate/addressCreate.module.scss";
import useMapPin from "hooks/useMapPin";
import {useController, useFormContext} from "react-hook-form";
import {useMemo} from "react";
import AddressCreateAddLocation from "view/addressCreate/component/AddressCreateAddLocation";

function AddressCreateMap() {
  const {control} = useFormContext();
  const pin = useMapPin();
  const {
    field,
    fieldState: {error},
  } = useController({
    control,
    name: "location",
    rules: {
      validate: (value) => {
        if (!value?.lat && !value?.lng) return "لوکیشن خود را انتخاب کنید";
        return true;
      },
    },
  });

  const point = useMemo(() => {
    if (field.value?.lat && field.value?.lng) {
      return [{lat: field.value.lat, lng: field.value.lng}];
    }
    return [];
  }, [field.value?.lat, field.value?.lng]);

  return (
    <>
      <div className={styles.address_create_map_container}>
        <Map
          className="w-full h-[150px] z-0 rounded-[10px] border border-borderColor"
          zoom={17}
          points={[point]}
          pinIcons={pin}
          zoomControl={false}
        />
        <AddressCreateAddLocation />
      </div>
      {error?.message ? <div className="text-[13px] text-error font-normal mb-2">{error?.message}</div> : null}
    </>
  );
}

export default AddressCreateMap;
