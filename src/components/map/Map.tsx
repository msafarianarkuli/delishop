import {MapContainer, Marker, Popup, TileLayer, useMapEvent} from "react-leaflet";
import {Icon, LatLngLiteral, LeafletMouseEvent, Point} from "leaflet";
import {useCallback} from "react";
import pin from "./pin.svg";
import {MapContainerProps} from "react-leaflet/lib/MapContainer";

export interface IMapPoint {
  latitude: number;
  longitude: number;
  title?: string | null;

  [x: string]: any;
}

export type TPoints = IMapPoint[][];

export interface IMap extends Omit<MapContainerProps, "center"> {
  centerLatitude?: number | null;
  centerLongitude?: number | null;
  points?: TPoints;
  pinIcons?: string[];
  onClick?: (event: LeafletMouseEvent) => void;
  enableMap?: boolean;
  onClickMarker?: (value: IMapPoint) => void;
}

const defaultLocation: LatLngLiteral = {
  lat: 35.801392,
  lng: 51.41822,
};

function Map(props: IMap) {
  const {
    centerLatitude,
    centerLongitude,
    points,
    onClick,
    enableMap,
    pinIcons,
    onClickMarker,
    children,
    zoom = 14,
    ...rest
  } = props;

  const pointsCenterLng = points?.length ? points[0][0]?.longitude : null;
  const pointsCenterLat = points?.length ? points[0][0]?.latitude : null;

  const center = {
    lng: centerLongitude || pointsCenterLng || defaultLocation.lng,
    lat: centerLatitude || pointsCenterLat || defaultLocation.lat,
  };

  const showMarkers = useCallback(() => {
    let markers: JSX.Element[] = [];
    if (points?.length) {
      points.map((point, index) => {
        const url = pinIcons?.length ? pinIcons[index] : pin.src;
        const icon = new Icon({
          iconUrl: url,
          iconRetinaUrl: url,
          iconSize: new Point(40, 40),
        });
        const baseId = Math.round(Math.random() * new Date().getTime());
        const tmp = point.map((item, idx) => {
          const position: LatLngLiteral = {
            lat: item.latitude,
            lng: item.longitude,
          };
          return (
            <Marker
              key={baseId + idx}
              position={position}
              icon={icon}
              eventHandlers={{
                click: () => {
                  onClickMarker?.(item);
                },
              }}
            >
              {item?.title ? (
                <Popup>
                  <p className="font-shabnam font-medium text-textColor text-center">{item.title}</p>
                </Popup>
              ) : null}
            </Marker>
          );
        });
        markers.push(...tmp);
      });
    }
    return markers;
  }, [onClickMarker, pinIcons, points]);

  return (
    <>
      {/*<Head>*/}
      {/*  <link*/}
      {/*    rel="stylesheet"*/}
      {/*    href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"*/}
      {/*    integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="*/}
      {/*    crossOrigin=""*/}
      {/*  />*/}
      {/*</Head>*/}
      <MapContainer center={center} zoom={zoom} {...rest}>
        {onClick ? <MapEvent onClick={onClick} /> : null}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showMarkers()}
        {children}
      </MapContainer>
    </>
  );
}

function MapEvent({onClick}: {onClick: (event: LeafletMouseEvent) => void}) {
  useMapEvent("click", onClick);

  return null;
}

export default Map;
