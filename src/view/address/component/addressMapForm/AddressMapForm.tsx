import {FormProvider, useForm} from "react-hook-form";
import {IMapPoint} from "components/map/Map";
import {createLog} from "utils/utils";
import AddressMapFormInput from "view/address/component/addressMapForm/component/AddressMapFormInput";
import {Button} from "antd";

interface IAddressMapForm {
  location: IMapPoint;
  title: string;
  address: string;
  addressDetail: string;
  phoneNumber: string;
}

function AddressMapForm() {
  const methods = useForm<IAddressMapForm>();
  const {handleSubmit} = methods;

  function onSubmit(payload: IAddressMapForm) {
    createLog("payload", payload);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddressMapFormInput id="title" label="عنوان آدرس" classNameContainer="mb-7" placeholder="خانه" />
        <AddressMapFormInput id="address" label="آدرس کامل" classNameContainer="mb-7" placeholder="تهران، منطقه 2" />
        <AddressMapFormInput
          id="addressDetail"
          label="جزئیات آدرس"
          classNameContainer="mb-7"
          placeholder="پلاک 56 واحد مدیریت"
        />
        <AddressMapFormInput
          id="phoneNumber"
          label="شماره تماس ثابت"
          classNameContainer="mb-7"
          placeholder="0212345678"
        />
        <Button htmlType="submit" type="primary" className="submit-btn w-full mt-2 mb-5">
          ثبت
        </Button>
      </form>
    </FormProvider>
  );
}

export default AddressMapForm;
