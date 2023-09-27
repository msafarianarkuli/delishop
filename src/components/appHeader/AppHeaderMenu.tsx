import {IconMenu, IconSearch} from "assets/icons";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {AppDispatch} from "redux/store";
import {setIsDrawerOpen} from "redux/template/templateReducer";

function AppHeaderMenu() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex gap-4 items-center">
      <Link href="/search" prefetch={false}>
        <IconSearch className="w-6 h-auto" />
      </Link>
      <button aria-label="menu" onClick={() => dispatch(setIsDrawerOpen(true))}>
        <IconMenu className="w-7 h-auto" />
      </button>
    </div>
  );
}

export default AppHeaderMenu;
