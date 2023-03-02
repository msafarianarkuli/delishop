import AddressCreateForm, {IAddressCreateForm} from "view/addressCreate/component/AddressCreateForm";
import AddressCreateHeader from "view/addressCreate/component/AddressCreateHeader";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAddressMap, setAddressMap} from "redux/addressMap/addressMapReducer";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {useSession} from "next-auth/react";
import {createLog} from "utils/utils";
import {IGetUserAddressesListRes} from "types/interfaceUserAddress";
import {useRouter} from "next/router";

interface IAddressCreate {
  isEdit?: boolean;
}

function AddressCreate({isEdit}: IAddressCreate) {
  const [defaultValues, setDefaultValues] = useState<IAddressCreateForm | undefined>();
  const [loading, setLoading] = useState(true);
  const {isStorageLoaded, location, locationData, isEdit: isEditMap} = useSelector(selectAddressMap);
  const {data, status} = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const id = router.query.id;
    if (isEdit && router.isReady && status === "authenticated" && isStorageLoaded) {
      if (id && !Array.isArray(id)) {
        axiosService<IGetUserAddressesListRes>({url: API.GET_USER_ADDRESSES, method: "get", token: data?.user.token})
          .then((res) => {
            const addresses = res.data.data.addresses;
            const tmp = addresses.find((item) => item.id.toString() === id);
            if (tmp) {
              setDefaultValues({
                location: {
                  lat: isEditMap ? location?.lat! : tmp.latitude,
                  lng: isEditMap ? location?.lng! : tmp.longitude,
                },
                address: isEditMap ? locationData?.formatted_address! : tmp.address,
                description: tmp.description,
                tel: tmp.tel,
                title: tmp.title,
              });
              if (!isEditMap) {
                dispatch(
                  setAddressMap({
                    location: {
                      lat: tmp.latitude,
                      lng: tmp.longitude,
                    },
                    locationData: null,
                  })
                );
              }
            }
          })
          .catch((err) => createLog("AddressCreate err", err))
          .finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    }
  }, [data?.user.token, dispatch, isEdit, isEditMap, isStorageLoaded, router.isReady, router.query.id, status]);

  useEffect(() => {
    if (!isEdit) {
      if (isStorageLoaded && location && locationData) {
        setDefaultValues({
          location: {
            lat: location.lat,
            lng: location.lng,
          },
          tel: "",
          address: locationData?.formatted_address || "",
          description: "",
          title: "",
        });
      }
      setLoading(false);
    }
  }, [isEdit, isStorageLoaded, location, locationData]);

  return (
    <>
      <AddressCreateHeader />
      <div className="px-screenSpace mt-headerNormal">
        {loading ? <div>loading ...</div> : <AddressCreateForm isEdit={isEdit} defaultValues={defaultValues} />}
      </div>
    </>
  );
}

export default AddressCreate;
