import {AppHeader, AppHeaderBackBtn} from "components";
import IconFavoriteOutline from "assets/icons/IconFavoriteOutline";
import {useRouter} from "next/router";

function RestaurantDetailHeader() {
  const router = useRouter();
  return (
    <div id="restaurantDetailHeader" className="fixed top-0 right-0 left-0 z-10">
      <AppHeader
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
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
