import SearchPage from "components/searchPage";
import {useVendorSearchParams} from "view/vendorSearch/context/VendorSearchParamsProvider";

function VendorSearch() {
  const {id} = useVendorSearchParams();
  return (
    <>
      <SearchPage vendorId={id} />
    </>
  );
}

export default VendorSearch;
