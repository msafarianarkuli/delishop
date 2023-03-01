import AddressCreateForm, {IAddressCreateForm} from "view/addressCreate/component/AddressCreateForm";
import AddressCreateHeader from "view/addressCreate/component/AddressCreateHeader";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";

interface IAddressCreate {
  isEdit?: boolean;
}

function AddressCreate({isEdit}: IAddressCreate) {
  const [defaultValues, setDefaultValues] = useState<IAddressCreateForm | undefined>();
  const [loading, setLoading] = useState(true);
  const {isStorageLoaded, location, locationData} = useSelector(selectAddressMap);

  useEffect(() => {
    if (isEdit) {
    } else {
      if (isStorageLoaded && location && locationData) {
        setDefaultValues({
          location: {
            lat: location.lat,
            lng: location.lng,
          },
          tel: "",
          address: locationData?.formatted_address || "",
          addressDetail: "",
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
        {loading ? <div>loading ...</div> : <AddressCreateForm defaultValues={defaultValues} />}
      </div>
    </>
  );
}

export default AddressCreate;
