import AddressMapSearchHeader from "view/addressMapSearch/component/AddressMapSearchHeader";
import AddressMapSearchInput from "view/addressMapSearch/component/AddressMapSearchInput";
import AddressMapSearchList from "view/addressMapSearch/component/AddressMapSearchList";
import AddressMapSearchNotfound from "view/addressMapSearch/component/AddressMapSearchNotfound";

function AddressMapSearch() {
  return (
    <>
      <AddressMapSearchHeader />
      <div className="px-screenSpace mt-headerNormal">
        <AddressMapSearchInput />
        <AddressMapSearchNotfound />
        <AddressMapSearchList />
      </div>
    </>
  );
}

export default AddressMapSearch;
