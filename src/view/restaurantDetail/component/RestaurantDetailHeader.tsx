import {AppHeader, AppHeaderBackBtn} from "components";
import IconFavoriteOutline from "assets/icons/IconFavoriteOutline";
import {useRouter} from "next/router";

function RestaurantDetailHeaderBody() {
  return (
    <div id="restaurantDetailHeaderTitle" className="opacity-0 transition-opacity ease-linear duration-200">
      رستوران اریایی
    </div>
  );
}

function RestaurantDetailHeader() {
  const router = useRouter();
  return (
    <div id="restaurantDetailHeader" className="fixed top-0 right-0 left-0 z-10">
      <AppHeader
        right={<AppHeaderBackBtn type="white" onClick={() => router.back()} />}
        body={<RestaurantDetailHeaderBody />}
        left={
          <button>
            <IconFavoriteOutline className="w-6 h-6 text-white" />
          </button>
        }
      />
    </div>
  );
}

export default RestaurantDetailHeader;
