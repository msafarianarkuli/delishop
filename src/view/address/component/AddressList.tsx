import AddressCard from "view/address/component/addressCard/AddressCard";
import {setAddressDeleteData, useAddressDeleteAction} from "view/address/context/AddressDeleteProvider";

const arr = Array.from(new Array(5), (_, i) => i + 1);

function AddressList() {
  const dispatch = useAddressDeleteAction();
  return (
    <div>
      {arr.map((item) => {
        return (
          <AddressCard
            key={item}
            id={item.toString()}
            title="خانه"
            address="تهران، جاده مخصوص تهران کرج خیابان ملک پلاک 5"
            onClickDelete={() => dispatch(setAddressDeleteData())}
          />
        );
      })}
    </div>
  );
}

export default AddressList;
