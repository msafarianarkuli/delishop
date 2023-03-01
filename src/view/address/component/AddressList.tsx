import AddressCard from "view/address/component/addressCard/AddressCard";
import {setAddressDeleteData, useAddressDeleteAction} from "view/address/context/AddressDeleteProvider";
import {useAddressData} from "view/address/context/AddressDataProvider";

function AddressList() {
  const dispatch = useAddressDeleteAction();
  const {data, isLoading} = useAddressData();

  if (isLoading) return <div>loading ...</div>;
  return (
    <div>
      {data?.map((item) => {
        return (
          <AddressCard
            key={item.id}
            id={item.id.toString()}
            title={item.title}
            address={item.address}
            onClickDelete={() => dispatch(setAddressDeleteData())}
          />
        );
      })}
    </div>
  );
}

export default AddressList;
