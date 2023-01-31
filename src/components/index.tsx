import dynamic from "next/dynamic";

import CustomInput from "components/customInput/CustomInput";
import CustomInputReactHook from "components/customInput/CustomInputReactHook";
import CustomTextArea from "components/customTextArea/CustomTextArea";
import CustomTextAreaReactHook from "components/customTextArea/CustomTextAreaReactHook";
import CustomModal from "components/customModal/CustomModal";
import AppHeader from "components/appHeader/AppHeader";
import BottomNavigation from "components/bottomNavigation/BottomNavigation";
import Checkbox from "components/checkbox/Checkbox";
import AppHeaderBackBtn from "components/appHeader/AppHeaderBackBtn";
import CustomDrawer from "components/customDrawer/CustomDrawer";
import BottomSheet from "components/customDrawer/BottomSheet";
import DatePicker from "components/datePicker/DatePicker";
import DatePickerReactHook from "components/datePicker/DatePickerReactHook";
import CustomSelect from "components/customSelect/CustomSelect";
import CustomSelectReactHook from "components/customSelect/CustomSelectReactHook";
import AppHeaderCoin from "components/appHeader/AppHeaderCoin";
import WalletTabRoute from "components/appTabRoute/component/walletTabRoute/WalletTabRoute";
import WalletAppHeader from "components/appHeader/component/WalletAppHeader";
import AppHeaderMenu from "components/appHeader/AppHeaderMenu";
import AppHeaderLocation from "components/appHeader/AppHeaderLocation";
import CustomSwiper from "components/customSwiper/CustomSwiper";
import AppHeaderDelete from "components/appHeader/AppHeaderDelete";

const Map = dynamic(() => import("components/map/Map"), {ssr: false});

export {
  CustomInput,
  CustomInputReactHook,
  CustomTextArea,
  CustomTextAreaReactHook,
  CustomModal,
  AppHeader,
  BottomNavigation,
  Checkbox,
  AppHeaderBackBtn,
  CustomDrawer,
  BottomSheet,
  Map,
  DatePicker,
  DatePickerReactHook,
  CustomSelect,
  CustomSelectReactHook,
  AppHeaderCoin,
  WalletTabRoute,
  WalletAppHeader,
  AppHeaderMenu,
  AppHeaderLocation,
  CustomSwiper,
  AppHeaderDelete,
};
