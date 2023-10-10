import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";
import RecordDetail from "./components/RecordDetail";
import IconMenu from "assets/icons/new/IconMenu";
import {useDispatch} from "react-redux";
import {AppDispatch} from "redux/store";
import {setIsDrawerOpen} from "redux/template/templateReducer";

const Record = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <AppHeader
        body={<h1 className="font-bold ml-6">ثبت اشکال یا تخلف در آگهی</h1>}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
        left={
          <button aria-label="menu" onClick={() => dispatch(setIsDrawerOpen(true))}>
            <IconMenu className="w-7 h-auto" />
          </button>
        }
      />
      <RecordDetail />
    </>
  );
};

export default Record;
