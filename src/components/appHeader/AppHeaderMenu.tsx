import {IconMenu} from "assets/icons";
import {useDispatch} from "react-redux";
import {AppDispatch} from "redux/store";
import {setIsDrawerOpen} from "redux/template/templateReducer";

function AppHeaderMenu() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <button aria-label="menu" onClick={() => dispatch(setIsDrawerOpen(true))}>
      <IconMenu className="w-7 h-auto" />
    </button>
  );
}

export default AppHeaderMenu;
