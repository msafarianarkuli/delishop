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
import AppHeaderLogo from "./appHeader/AppHeaderLogo";
import ProfileWalletTabRoute from "components/appTabRoute/component/profileWalletTabRoute/ProfileWalletTabRoute";
import ProfileMainTabRoute from "./appTabRoute/component/profileMainTabRoute/ProfileMainTabRoute";
import ProfileWalletAppHeader from "components/appHeader/component/ProfileWalletAppHeader";
import AppHeaderMenu from "components/appHeader/AppHeaderMenu";
import AppHeaderLocation from "components/appHeader/AppHeaderLocation";
import CustomSwiper from "components/customSwiper/CustomSwiper";
import AppHeaderDelete from "components/appHeader/AppHeaderDelete";
import SubmitBuyBtn from "components/customButton/SubmitBuyBtn";
import RestaurantInfoAppHeader from "components/appHeader/component/RestaurantInfoAppHeader";
import OrderAppHeader from "components/appHeader/component/OrderAppHeader";
import AppHeaderFavorite from "components/appHeader/AppHeaderFavorite";
import Counter from "components/counter/Counter";
import BottomPageGradient from "components/bottomPageGradient";
import ProductDetailSwiper from "components/customSwiper/ProductDetailSwiper";
import OrderActive from "components/orderActive";
import SubmitBtnToCompleteOrder from "components/submitBtnToCompleteOrder";

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
  AppHeaderLogo,
  ProfileWalletTabRoute,
  ProfileMainTabRoute,
  ProfileWalletAppHeader,
  AppHeaderMenu,
  AppHeaderLocation,
  CustomSwiper,
  AppHeaderDelete,
  SubmitBuyBtn,
  RestaurantInfoAppHeader,
  OrderAppHeader,
  AppHeaderFavorite,
  Counter,
  BottomPageGradient,
  ProductDetailSwiper,
  OrderActive,
  SubmitBtnToCompleteOrder,
};
