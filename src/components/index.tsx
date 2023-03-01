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
import ProfileWalletTabRoute from "components/appTabRoute/component/profileWalletTabRoute/ProfileWalletTabRoute";
import ProfileWalletAppHeader from "components/appHeader/component/ProfileWalletAppHeader";
import AppHeaderMenu from "components/appHeader/AppHeaderMenu";
import AppHeaderLocation from "components/appHeader/AppHeaderLocation";
import CustomSwiper from "components/customSwiper/CustomSwiper";
import AppHeaderDelete from "components/appHeader/AppHeaderDelete";
import SubmitBuyBtn from "components/customButton/SubmitBuyBtn";
import RestaurantInfoAppHeader from "components/appHeader/component/RestaurantInfoAppHeader";
import RestaurantOrderAppHeader from "components/appHeader/component/RestaurantOrderAppHeader";
import AppHeaderFavorite from "components/appHeader/AppHeaderFavorite";
import Counter from "components/counter/Counter";
import BottomPageGradient from "components/bottomPageGradient";
import ProductDetailSwiper from "components/customSwiper/ProductDetailSwiper";

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
  ProfileWalletTabRoute,
  ProfileWalletAppHeader,
  AppHeaderMenu,
  AppHeaderLocation,
  CustomSwiper,
  AppHeaderDelete,
  SubmitBuyBtn,
  RestaurantInfoAppHeader,
  RestaurantOrderAppHeader,
  AppHeaderFavorite,
  Counter,
  BottomPageGradient,
  ProductDetailSwiper,
};
