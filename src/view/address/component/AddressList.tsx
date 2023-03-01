import AddressCard from "view/address/component/addressCard/AddressCard";
import {setAddressDeleteData, useAddressDeleteAction} from "view/address/context/AddressDeleteProvider";
import {useAddressData} from "view/address/context/AddressDataProvider";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAddressMap, setUserAddress} from "redux/addressMap/addressMapReducer";

function AddressList() {
  const dispatch = useDispatch();
  const dispatchAddressDelete = useAddressDeleteAction();
  const {data, isLoading} = useAddressData();
  const {userAddress, isUserAddressStorageLoaded} = useSelector(selectAddressMap);

  useEffect(() => {
    if (!userAddress && data?.length && isUserAddressStorageLoaded) {
      dispatch(setUserAddress(data[0]));
    }
  }, [data, dispatch, isUserAddressStorageLoaded, userAddress]);

  if (isLoading) return <div>loading ...</div>;
  return (
    <div>
      {data?.map((item) => {
        return (
          <AddressCard
            selected={userAddress?.id === item.id}
            key={item.id}
            id={item.id.toString()}
            title={item.title}
            address={item.address}
            onClick={() => dispatch(setUserAddress(item))}
            onClickDelete={(e) => {
              e.stopPropagation();
              dispatchAddressDelete(setAddressDeleteData(item));
            }}
          />
        );
      })}
    </div>
  );
}

export default AddressList;
