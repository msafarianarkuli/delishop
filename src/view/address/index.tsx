import AddressHeader from "view/address/component/AddressHeader";
import AddressAdd from "view/address/component/AddressAdd";
import AddressDeleteModal from "view/address/component/AddressDeleteModal";
import AddressList from "view/address/component/AddressList";
import AddressDeleteProvider from "view/address/context/AddressDeleteProvider";

function Address() {
  return (
    <AddressDeleteProvider>
      <AddressHeader />
      <div className="mt-headerNormal px-screenSpace">
        <AddressAdd />
        <AddressList />
      </div>
      <AddressDeleteModal />
    </AddressDeleteProvider>
  );
}

export default Address;
