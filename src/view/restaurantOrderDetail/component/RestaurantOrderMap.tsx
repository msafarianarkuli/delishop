import {Map} from "components";
import {useMap} from "react-leaflet";
import {useEffect} from "react";
import {latLng, latLngBounds} from "leaflet";

const data = [
  {title: "لوکیشن من", lat: 35.704431, lng: 51.392746},
  {title: "رستوران", lat: 35.711324, lng: 51.406417},
];

interface IRestaurantOrderMap {
  height: number;
}

function RestaurantOrderMap(props: IRestaurantOrderMap) {
  const {height} = props;
  return (
    <>
      <Map zoom={17} points={[data]} className="w-full" style={{height}}>
        <MapComponent />
      </Map>
    </>
  );
}

function MapComponent() {
  const map = useMap();

  useEffect(() => {
    // console.log("map", map);
    const latlng = data.map((item) => {
      return latLng(item.lat, item.lng);
    });
    const bounds = latLngBounds(latlng);
    map.fitBounds(bounds);
  }, [map]);

  return null;
}

export default RestaurantOrderMap;
