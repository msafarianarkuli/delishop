import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn, AppHeaderFavorite} from "components";

function VendorProductRestaurantHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader
        left={<AppHeaderFavorite />}
        body="رستوران آریایی"
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default VendorProductRestaurantHeader;
