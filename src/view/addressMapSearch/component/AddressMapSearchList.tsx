import AddressMapSearchCard from "view/addressMapSearch/component/AddressMapSearchCard";
import {
  addressMapSearchNameQuery,
  useAddressMapSearchData,
} from "view/addressMapSearch/context/AddressMapSearchDataProvider";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setAddressMap} from "redux/addressMap/addressMapReducer";
import usePathnameQuery from "hooks/usePathnameQuery";
import {useMemo} from "react";

function AddressMapSearchList() {
  const {data} = useAddressMapSearchData();
  const dispatch = useDispatch();
  const router = useRouter();
  const {querySearch} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);

  return (
    <div>
      {data?.items.map((item, index) => {
        let text = item.title;
        if (item.neighbourhood) {
          text += "، " + item.neighbourhood;
        }
        return (
          <AddressMapSearchCard
            key={index}
            text={text}
            onClick={() => {
              const city = item.region.split("،")[0];
              dispatch(
                setAddressMap({
                  location: {
                    lat: item.location.y,
                    lng: item.location.x,
                  },
                  locationData: {
                    formatted_address: city.trim() + ", " + item.address,
                  },
                })
              );
              query.delete(addressMapSearchNameQuery);
              let url = "/address/map";
              if (query.toString()) {
                url += "?" + query.toString();
              }
              router.replace(url);
            }}
          />
        );
      })}
    </div>
  );
}

export default AddressMapSearchList;
