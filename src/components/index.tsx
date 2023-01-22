import dynamic from "next/dynamic";

import CustomInput from "components/customInput/CustomInput";
import CustomInputReactHook from "components/customInput/CustomInputReactHook";
import CustomTextArea from "components/customTextArea/CustomTextArea";
import CustomTextAreaReactHook from "components/customTextArea/CustomTextAreaReactHook";
import CustomModal from "components/customModal/CustomModal";
import AppHeader from "components/appHeader/AppHeader";
import BottomNavigation from "components/bottomNavigation/BottomNavigation";
import Checkbox from "components/checkbox/Checkbox";
import BackBtn from "components/backBtn/BackBtn";
import CustomDrawer from "components/customDrawer/CustomDrawer";
import BottomSheet from "components/customDrawer/BottomSheet";
import DatePicker from "components/datePicker/DatePicker";
import DatePickerReactHook from "components/datePicker/DatePickerReactHook";

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
  BackBtn,
  CustomDrawer,
  BottomSheet,
  Map,
  DatePicker,
  DatePickerReactHook,
};
