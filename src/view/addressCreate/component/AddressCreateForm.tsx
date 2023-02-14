import {FormProvider, useForm} from "react-hook-form";
import {createLog} from "utils/utils";
import {IMapPoint} from "components/map/Map";
import AddressCreateFormInput from "view/addressCreate/component/AddressCreateFormInput";
import AddressCreateMap from "view/addressCreate/component/AddressCreateMap";
import AddressCreateFormSubmit from "view/addressCreate/component/AddressCreateFormSubmit";

interface IAddressCreateForm {
  location: IMapPoint;
  title: string;
  address: string;
  addressDetail: string;
  phoneNumber: string;
}

function AddressCreateForm() {
  const methods = useForm<IAddressCreateForm>();
  const {handleSubmit} = methods;

  function onSubmit(payload: IAddressCreateForm) {
    createLog("payload", payload);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddressCreateMap />
        <AddressCreateFormInput
          id="title"
          label="عنوان آدرس"
          classNameContainer="mb-7"
          placeholder="خانه"
          rules={{
            validate: (value) => {
              if (!value) return "عنوان آدرس را وارد کنید";
              return true;
            },
          }}
        />
        <AddressCreateFormInput
          id="address"
          label="آدرس کامل"
          classNameContainer="mb-7"
          placeholder="تهران، منطقه 2"
          rules={{
            validate: (value) => {
              if (!value) return "آدرس کامل را وارد کنید";
              return true;
            },
          }}
        />
        <AddressCreateFormInput
          id="addressDetail"
          label="جزئیات آدرس"
          classNameContainer="mb-7"
          placeholder="پلاک 56 واحد مدیریت"
          rules={{
            validate: (value) => {
              if (!value) return "جزئیات آدرس را وارد کنید";
              return true;
            },
          }}
        />
        <AddressCreateFormInput
          id="phoneNumber"
          label="شماره تماس ثابت"
          classNameContainer="mb-7"
          placeholder="0212345678"
          numerical
          className="dir-ltr"
        />
        <AddressCreateFormSubmit />
      </form>
    </FormProvider>
  );
}

export default AddressCreateForm;
