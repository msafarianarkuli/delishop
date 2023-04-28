import {AppHeaderBackBtn, Map} from "components";
import {useMap} from "react-leaflet";
import {useEffect, useState} from "react";
import {latLng, latLngBounds} from "leaflet";
import {useRouter} from "next/router";
import {IMapPoint} from "components/map/Map";
import {useRestaurantOrderDetailData} from "view/restaurantOrderDetail/context/RestaurantOrderDetailDataProvider";

interface IRestaurantOrderMap {
  height: number;
}

function RestaurantOrderMap(props: IRestaurantOrderMap) {
  const {height} = props;
  const router = useRouter();
  const {data} = useRestaurantOrderDetailData();
  const [points, setPoints] = useState<IMapPoint[]>([]);

  useEffect(() => {
    const vendorLat = data?.vendor.lat;
    const vendorLong = data?.vendor.long;
    const addressLat = data?.address.latitude;
    const addressLong = data?.address.longitude;
    if (vendorLat && vendorLong && addressLong && addressLat) {
      setPoints([
        {
          title: data?.vendor.name || "",
          lat: vendorLat,
          lng: vendorLong,
        },
        {
          title: data?.address.title || "",
          lat: addressLat,
          lng: addressLong,
        },
      ]);
    }
  }, [
    data?.address.latitude,
    data?.address.longitude,
    data?.address.title,
    data?.vendor.lat,
    data?.vendor.long,
    data?.vendor.name,
  ]);

  return (
    <>
      <Map zoom={15} points={[points]} className="w-full" style={{height}}>
        <AppHeaderBackBtn
          type="white"
          className="absolute z-[999] top-[10px] right-[10px]"
          onClick={() => router.back()}
        />
        <MapComponent points={points} />
      </Map>
    </>
  );
}

interface IMapComponent {
  points: IMapPoint[];
}

function MapComponent({points}: IMapComponent) {
  const map = useMap();

  useEffect(() => {
    if (points.length) {
      const latlng = points.map((item) => {
        return latLng(item.lat, item.lng);
      });
      const bounds = latLngBounds(latlng);
      map.fitBounds(bounds);
    }
  }, [map, points]);

  return null;
}

export default RestaurantOrderMap;
