import AddressMapSearch from "view/addressMapSearch";
import AddressMapSearchDataProvider from "view/addressMapSearch/context/AddressMapSearchDataProvider";

function AddressMapSearchPage() {
  return (
    <AddressMapSearchDataProvider>
      <AddressMapSearch />
    </AddressMapSearchDataProvider>
  );
}

export default AddressMapSearchPage;
