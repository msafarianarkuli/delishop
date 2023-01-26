import {Map} from "components";
import styles from "view/addressCreate/addressCreate.module.scss";
import {IconEditAddress} from "assets/icons";
import {useRouter} from "next/router";

function AddressCreateMap() {
  const router = useRouter();
  return (
    <div className={styles.address_create_map_container}>
      <Map
        className="w-full h-[100px] rounded-[10px] border border-borderColor"
        zoom={17}
        points={[[{title: "لوکیشن من", lat: 35.704431, lng: 51.392746}]]}
        zoomControl={false}
      />
      <button
        className="flex items-center text-right w-full px-[10px] py-[20px]"
        type="button"
        onClick={() => router.push("/address/map")}
      >
        <div className="w-[calc(100%-18px)] truncate text-textColorLight pl-2">محدوده:45 متری شیوا</div>
        <div>
          <IconEditAddress className="w-[18px] h-[18px]" />
        </div>
      </button>
    </div>
  );
}

export default AddressCreateMap;
