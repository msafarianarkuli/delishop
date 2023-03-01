import Address from "view/address";
import AddressDataProvider from "view/address/context/AddressDataProvider";

function AddressPage() {
  return (
    <AddressDataProvider>
      <Address />
    </AddressDataProvider>
  );
}

export default AddressPage;
