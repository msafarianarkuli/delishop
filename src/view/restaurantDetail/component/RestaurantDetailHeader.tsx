import {AppHeader, BackBtn} from "components";
import IconFavoriteOutline from "assets/icons/IconFavoriteOutline";

function RestaurantDetailHeader() {
  return (
    <div className="fixed top-0 right-0 left-0 z-10">
      <AppHeader
        right={<BackBtn />}
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
